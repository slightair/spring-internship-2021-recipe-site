import {GraphQLClient} from "graphql-request";
import {getSdk, RecipeConnection} from "../generated/client";
import {useEffect, useState} from "react";

const client = new GraphQLClient("/api/graphql")
const sdk = getSdk(client);

async function getRecipes() {
    const response = await sdk.getRecipes();
    return response.recipes;
}

export function useRecipes(): RecipeConnection | null {
    const [connection, setConnection] = useState<RecipeConnection | null>(null);

    useEffect(() => {
        // @ts-ignore
        getRecipes().then((conn) => setConnection(conn));
    }, []);

    return connection;
}
