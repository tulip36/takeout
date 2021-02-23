import {
  categories,
  category,
  createCategory,
  updateCategory,
  deleteCategory,
} from './categories'

describe('categories', () => {
  scenario('returns all categories', async (scenario) => {
    const result = await categories()

    expect(result.length).toEqual(Object.keys(scenario.category).length)
  })

  scenario('returns a single category', async (scenario) => {
    const result = await category({ id: scenario.category.one.id })

    expect(result).toEqual(scenario.category.one)
  })

  scenario('creates a category', async (scenario) => {
    const result = await createCategory({
      input: { Nmae: 'String' },
    })

    expect(result.Nmae).toEqual('String')
  })

  scenario('updates a category', async (scenario) => {
    const original = await category({ id: scenario.category.one.id })
    const result = await updateCategory({
      id: original.id,
      input: { Nmae: 'String2' },
    })

    expect(result.Nmae).toEqual('String2')
  })

  scenario('deletes a category', async (scenario) => {
    const original = await deleteCategory({ id: scenario.category.one.id })
    const result = await category({ id: original.id })

    expect(result).toEqual(null)
  })
})