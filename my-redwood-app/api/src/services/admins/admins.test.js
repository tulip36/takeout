import { admins, admin, createAdmin, updateAdmin, deleteAdmin } from './admins'

describe('admins', () => {
  scenario('returns all admins', async (scenario) => {
    const result = await admins()

    expect(result.length).toEqual(Object.keys(scenario.admin).length)
  })

  scenario('returns a single admin', async (scenario) => {
    const result = await admin({ id: scenario.admin.one.id })

    expect(result).toEqual(scenario.admin.one)
  })

  scenario('creates a admin', async () => {
    const result = await createAdmin({
      input: {
        firstName: 'String',
        lastName: 'String',
        userName: 'String',
        password: 'String',
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.userName).toEqual('String')
    expect(result.password).toEqual('String')
  })

  scenario('updates a admin', async (scenario) => {
    const original = await admin({ id: scenario.admin.one.id })
    const result = await updateAdmin({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a admin', async (scenario) => {
    const original = await deleteAdmin({ id: scenario.admin.one.id })
    const result = await admin({ id: original.id })

    expect(result).toEqual(null)
  })
})
