export const schema = gql`
  type Dpat {
    id: Int!
    Owner: String!
    vesselname: String!
    title: String!
    date: String!
    author: String!
    findings: Boolean!
    anyAFindings: Boolean!
    aFindings: String
    anyBFindings: Boolean!
    bFindings: String
    anyCFindings: Boolean!
    cFindings: String!
    classed: Boolean!
    classsociety: String
    reviewed: Boolean!
  }

  type Query {
    dpats: [Dpat!]!
    dpat(id: Int!): Dpat
  }

  input CreateDpatInput {
    Owner: String!
    vesselname: String!
    title: String!
    date: String!
    author: String!
    findings: Boolean!
    anyAFindings: Boolean!
    aFindings: String
    anyBFindings: Boolean!
    bFindings: String
    anyCFindings: Boolean!
    cFindings: String!
    classed: Boolean!
    classsociety: String
    reviewed: Boolean!
  }

  input UpdateDpatInput {
    Owner: String
    vesselname: String
    title: String
    date: String
    author: String
    findings: Boolean
    anyAFindings: Boolean
    aFindings: String
    anyBFindings: Boolean
    bFindings: String
    anyCFindings: Boolean
    cFindings: String
    classed: Boolean
    classsociety: String
    reviewed: Boolean
  }

  type Mutation {
    createDpat(input: CreateDpatInput!): Dpat!
    updateDpat(id: Int!, input: UpdateDpatInput!): Dpat!
    deleteDpat(id: Int!): Dpat!
  }
`
