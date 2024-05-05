/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      name
      description
      doctor
      like
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        doctor
        like
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
