import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const admins = () => {
  return db.admin.findMany()
}

export const admin = ({ id }) => {
  return db.admin.findUnique({
    where: { id },
  })
}

export const createAdmin = ({ input }) => {
  return db.admin.create({
    data: input,
  })
}

export const updateAdmin = ({ id, input }) => {
  return db.admin.update({
    data: input,
    where: { id },
  })
}

export const deleteAdmin = ({ id }) => {
  return db.admin.delete({
    where: { id },
  })
}

export const Admin = {
  menu: (_obj, { root }) =>
    db.admin.findUnique({ where: { id: root.id } }).menu(),
}
