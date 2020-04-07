import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-boost";

const link = createHttpLink({ uri: "/graphql" });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client;
