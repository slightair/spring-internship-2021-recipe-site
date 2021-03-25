import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  user_name: Scalars['String'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  name: Scalars['String'];
  quantity: Scalars['String'];
};

export type Link = {
  __typename?: 'Link';
  next?: Maybe<Scalars['String']>;
  prev?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  recipes: RecipeConnection;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  author: Author;
  published_at: Scalars['String'];
  steps: Array<Maybe<Scalars['String']>>;
  ingredients: Array<Maybe<Ingredient>>;
  related_recipes: Array<Maybe<Scalars['ID']>>;
};

export type RecipeConnection = {
  __typename?: 'RecipeConnection';
  recipes: Array<Maybe<Recipe>>;
  links: Link;
};

export type GetRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecipesQuery = (
  { __typename?: 'Query' }
  & { recipes: (
    { __typename?: 'RecipeConnection' }
    & { recipes: Array<Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'title'>
    )>> }
  ) }
);


export const GetRecipesDocument = gql`
    query getRecipes {
  recipes {
    recipes {
      id
      title
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getRecipes(variables?: GetRecipesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRecipesQuery> {
      return withWrapper(() => client.request<GetRecipesQuery>(GetRecipesDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;