export const schema = gql`
  type Category {
    CategoryId: Int!
    Nmae: String!
    FoodItem: [FoodItem]!
  }

  type Query {
    categories: [Category!]!
    category(id: Int!): Category
  }

  input CreateCategoryInput {
    CategoryId: Int!
    Nmae: String!
  }

  input UpdateCategoryInput {
    CategoryId: Int
    Nmae: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
    deleteCategory(id: Int!): Category!
  }
`
