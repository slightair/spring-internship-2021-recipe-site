export const resolvers = {
    Query: {
        recipes: async (_parent, args, {dataSources}) => dataSources.cookpad.getRecipes()
    }
}