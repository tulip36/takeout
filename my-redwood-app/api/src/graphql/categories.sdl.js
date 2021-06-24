export const schema = gql`
  type Category {
    id: Int!
    name: String!
    note: String!
    FoodItem: [FoodItem]!
  }

  type Query {
    categories: [Category!]!
    category(id: Int!): Category
  }

  input CreateCategoryInput {
    name: String!
    note: String!
  }

  input UpdateCategoryInput {
    name: String
    note: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
    deleteCategory(id: Int!): Category!
  }
`
