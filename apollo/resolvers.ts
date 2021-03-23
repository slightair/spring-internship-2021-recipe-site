export const resolvers = {
    Query: {
        viewer() {
            return { id: 1, name: 'Taro', status: 'cached' }
        }
    }
}
