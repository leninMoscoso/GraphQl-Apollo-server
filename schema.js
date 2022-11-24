export const typeDefs =`
  type User {
    id: String
    name: String
    email: String
  }

  type Query {
    users: [User]
  }
`;
