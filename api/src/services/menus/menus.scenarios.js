export const standard = defineScenario({
  menu: {
    one: {
      EndDate: '2021-02-23T18:30:38Z',
      FoodItem: {
        create: { Name: 'String', Category: { create: { Nmae: 'String' } } },
      },
    },

    two: {
      EndDate: '2021-02-23T18:30:38Z',
      FoodItem: {
        create: { Name: 'String', Category: { create: { Nmae: 'String' } } },
      },
    },
  },
})
