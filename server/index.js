const { ApolloServer, gql } = require("apollo-server");

const typeDef = gql`
  type Post {
    id: Int!
    name: String!
    types: String
    ordering: String
    image: String
    stats: String
  }
`;
