export const schema = gql`
  type FoodItem {
    FoodId: Int!
    Name: String!
    Quantity: Float!
    UnitPrice: Float!
    CategoryId: Int!
    Category: Category!
    Menu: [Menu]!
  }

  type Query {
    foodItems: [FoodItem!]!
    foodItem(id: Int!): FoodItem
  }

  input CreateFoodItemInput {
    FoodId: Int!
    Name: String!
    Quantity: Float!
    UnitPrice: Float!
    CategoryId: Int!
  }

  input UpdateFoodItemInput {
    FoodId: Int
    Name: String
    Quantity: Float
    UnitPrice: Float
    CategoryId: Int
  }

  type Mutation {
    createFoodItem(input: CreateFoodItemInput!): FoodItem!
    updateFoodItem(id: Int!, input: UpdateFoodItemInput!): FoodItem!
    deleteFoodItem(id: Int!): FoodItem!
  }
`
