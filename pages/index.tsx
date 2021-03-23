import {gql, useQuery} from "@apollo/client"

const RecipesQuery = gql`
    query {
        recipes {
            recipes {
                id
                title
            }
        }
    }
`

const Index = () => {
    const {loading, error, data} = useQuery(RecipesQuery)
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>
    }
    const {recipes} = data;
    return <div>
        <ul>
            {recipes.recipes.map((value) => <li>{value.title}</li>)}
        </ul>
    </div>;
};

// export async function getStaticProps() {
//     const apolloClient = initializeApollo()
//
//     await apolloClient.query({
//         query: RecipesQuery,
//     })
//
//     return {
//         props: {
//             initializeApolloState: apolloClient.cache.extract(),
//         }
//     }
// }

export default Index;
