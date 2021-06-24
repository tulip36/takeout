import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const categories = () => {
  return db.category.findMany()
}

export const category = ({ id }) => {
  return db.category.findUnique({
    where: { id },
  })
}

export const createCategory = ({ input }) => {
  return db.category.create({
    data: input,
  })
}

export const updateCategory = ({ id, input }) => {
  return db.category.update({
    data: input,
    where: { id },
  })
}

export const deleteCategory = ({ id }) => {
  return db.category.delete({
    where: { id },
  })
}

export const Category = {
  FoodItem: (_obj, { root }) =>
    db.category.findUnique({ where: { id: root.id } }).FoodItem(),
}
