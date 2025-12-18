import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const apiUrl = 'https://graphqlzero.almansi.me/api';

// Create the Apollo Client (for vue-apollo-option and vue-apollo-composable)
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: apiUrl,
  }),
});

// Create a Vue Apollo provider (for vue-apollo-option)
export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});
