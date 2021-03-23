import {gql, useQuery} from "@apollo/client"
import {initializeApollo} from "../apollo/client";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
    }
  }
`

const Index = () => {
    const {loading, error, data} = useQuery(ViewerQuery)
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>
    }
    const {viewer} = data
    return <h1>Hello {viewer.name}!</h1>;
};

export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: ViewerQuery,
    })

    return {
        props: {
            initializeApolloState: apolloClient.cache.extract(),
        }
    }
}

export default Index;
