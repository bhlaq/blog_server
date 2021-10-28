const { gql } = require('apollo-server');

module.exports = gql`

  type Movie {
    id: ID!
    name: String!
    url: String!
  }

  input CreateMovieInput {
    name: String!
    url: String!
  }

  input UpdateMovieInput {
    name: String
    url: String
  }

  input DeleteMovieInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    movies: [Movie]!
  }

  type Mutation {
    createMovie(input: CreateMovieInput!): Movie!
    updateMovie(id: ID!, input: UpdateMovieInput!): Movie!
    deleteMovie(id: ID!): DeletePayload!
  }
  
`;
