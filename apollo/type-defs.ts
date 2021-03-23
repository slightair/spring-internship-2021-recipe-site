import {gql} from "apollo-server-micro";

export const typeDefs = gql`
    type Query {
        recipes: RecipeConnection!
    }
    type Link {
        next: String
        prev: String
    }
    type Author {
        user_name: String!
    }
    type Ingredient {
        name: String!
        quantity: String!
    }
    type Recipe {
        id: ID!
        title: String!
        description: String!
        image_url: String
        author: Author!
        published_at: String!
        steps: [String]!
        ingredients: [Ingredient]!
        related_recipes: [ID]!
    }
    type RecipeConnection {
        recipes: [Recipe]!
        links: Link!
    }
`