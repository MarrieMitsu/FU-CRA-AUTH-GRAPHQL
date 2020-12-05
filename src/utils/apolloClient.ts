// Packages
import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from '@apollo/client';
import { accessToken } from './accessToken';

// Http link
const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
});

// Auth link
const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => ({
        headers: {
            ...headers,
            authorization: accessToken.value ? `Bearer ${accessToken.value}` : "",
        }
    }));

    return forward(operation);
});

// Apollo client
const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
});

// Exports
export default client;