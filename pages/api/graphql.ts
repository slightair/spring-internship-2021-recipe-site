import fs from "fs";
import {ApolloServer} from "apollo-server-micro";
import {makeExecutableSchema} from "graphql-tools";
import {resolvers} from "../../lib/server/resolvers";
import {CookpadDataSource} from "../../lib/server/CookpadDataSource";

export const config = {
    api: {
        bodyParser: false,
    },
};

const typeDefs = fs.readFileSync("./schema.graphql", {encoding: "utf8"});

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const apolloServer = new ApolloServer({
    schema,
    dataSources: () => ({
        cookpad: new CookpadDataSource(),
    }),
});
export default apolloServer.createHandler({path: '/api/graphql'});
