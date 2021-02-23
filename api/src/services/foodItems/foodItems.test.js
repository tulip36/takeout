import {
  foodItems,
  foodItem,
  createFoodItem,
  updateFoodItem,
  deleteFoodItem,
} from './foodItems'

describe('foodItems', () => {
  scenario('returns all foodItems', async (scenario) => {
    const result = await foodItems()

    expect(result.length).toEqual(Object.keys(scenario.foodItem).length)
  })

  scenario('returns a single foodItem', async (scenario) => {
    const result = await foodItem({ id: scenario.foodItem.one.id })

    expect(result).toEqual(scenario.foodItem.one)
  })

  scenario('creates a foodItem', async (scenario) => {
    const result = await createFoodItem({
      input: { Name: 'String', CategoryId: 'scenario.foodItem.two.CategoryId' },
    })

    expect(result.Name).toEqual('String')
    expect(result.Quantity).toEqual()
    expect(result.UnitPrice).toEqual()
    expect(result.CategoryId).toEqual('scenario.foodItem.two.CategoryId')
  })

  scenario('updates a foodItem', async (scenario) => {
    const original = await foodItem({ id: scenario.foodItem.one.id })
    const result = await updateFoodItem({
      id: original.id,
      input: { Name: 'String2' },
    })

    expect(result.Name).toEqual('String2')
  })

  scenario('deletes a foodItem', async (scenario) => {
    const original = await deleteFoodItem({ id: scenario.foodItem.one.id })
    const result = await foodItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
