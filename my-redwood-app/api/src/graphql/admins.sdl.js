export const schema = gql`
  type Admin {
    id: Int!
    firstName: String!
    lastName: String!
    userName: String!
    password: String!
    status: String!
    menu: Menu
  }

  type Query {
    admins: [Admin!]!
    admin(id: Int!): Admin
  }

  input CreateAdminInput {
    firstName: String!
    lastName: String!
    userName: String!
    password: String!
    status: String!
  }

  input UpdateAdminInput {
    firstName: String
    lastName: String
    userName: String
    password: String
    status: String
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin!
    updateAdmin(id: Int!, input: UpdateAdminInput!): Admin!
    deleteAdmin(id: Int!): Admin!
  }
`
