export const resolvers = {
    Query: {
        recipes: async (_, __, {dataSources}) => dataSources.cookpad.getRecipes()
    }
}
