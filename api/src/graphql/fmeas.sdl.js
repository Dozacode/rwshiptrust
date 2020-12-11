export const schema = gql`
  type Fmea {
    id: Int!
    Owner: String!
    vesselname: String!
    title: String!
    date: DateTime!
    author: String!
    classed: Boolean!
    classsociety: String
    reviewed: Boolean!
  }

  type Query {
    fmeas: [Fmea!]!
    fmea(id: Int!): Fmea
  }

  input CreateFmeaInput {
    Owner: String!
    vesselname: String!
    title: String!
    date: DateTime!
    author: String!
    classed: Boolean!
    classsociety: String
    reviewed: Boolean!
  }

  input UpdateFmeaInput {
    Owner: String
    vesselname: String
    title: String
    date: DateTime
    author: String
    classed: Boolean
    classsociety: String
    reviewed: Boolean
  }

  type Mutation {
    createFmea(input: CreateFmeaInput!): Fmea!
    updateFmea(id: Int!, input: UpdateFmeaInput!): Fmea!
    deleteFmea(id: Int!): Fmea!
  }
`
