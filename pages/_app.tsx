import {ApolloProvider} from "@apollo/client";
import {useApollo} from "../apollo/client";

export default function App({Component, pageProps}) {
    const apolloClient = useApollo(pageProps.initializeAppoloState)

    return <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
    </ApolloProvider>
}