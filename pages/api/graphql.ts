import {ApolloServer} from "apollo-server-micro";
import {CookpadDataSource} from "../../apollo/CookpadDataSource";
import {schema} from "../../apollo/schema";

export const config = {
    api: {
        bodyParser: false,
    },
};

const apolloServer = new ApolloServer({
    schema,
    dataSources: () => ({
        cookpad: new CookpadDataSource(),
    }),
});
export default apolloServer.createHandler({path: '/api/graphql'});
