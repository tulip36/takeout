export const schema = gql`
  type Menu {
    MenuId: Int!
    Prince: Float!
    StartDate: DateTime!
    EndDate: DateTime!
    FoodId: Int!
    FoodItem: FoodItem!
  }

  type Query {
    menus: [Menu!]!
    menu(id: Int!): Menu
  }

  input CreateMenuInput {
    MenuId: Int!
    Prince: Float!
    StartDate: DateTime!
    EndDate: DateTime!
    FoodId: Int!
  }

  input UpdateMenuInput {
    MenuId: Int
    Prince: Float
    StartDate: DateTime
    EndDate: DateTime
    FoodId: Int
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu!
    updateMenu(id: Int!, input: UpdateMenuInput!): Menu!
    deleteMenu(id: Int!): Menu!
  }
`
