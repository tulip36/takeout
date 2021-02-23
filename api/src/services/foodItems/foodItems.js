import { db } from 'src/lib/db'

export const foodItems = () => {
  return db.foodItem.findMany()
}

export const foodItem = ({ id }) => {
  return db.foodItem.findUnique({
    where: { id },
  })
}

export const createFoodItem = ({ input }) => {
  return db.foodItem.create({
    data: input,
  })
}

export const updateFoodItem = ({ id, input }) => {
  return db.foodItem.update({
    data: input,
    where: { id },
  })
}

export const deleteFoodItem = ({ id }) => {
  return db.foodItem.delete({
    where: { id },
  })
}

export const FoodItem = {
  Category: (_obj, { root }) =>
    db.foodItem.findUnique({ where: { id: root.id } }).Category(),
  Menu: (_obj, { root }) =>
    db.foodItem.findUnique({ where: { id: root.id } }).Menu(),
}
