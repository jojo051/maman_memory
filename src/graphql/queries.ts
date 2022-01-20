/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      childrens {
        items {
          id
          userID
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        childrens {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChildren = /* GraphQL */ `
  query GetChildren($id: ID!) {
    getChildren(id: $id) {
      id
      userID
      name
      dailyStatements {
        items {
          id
          childrenID
          date
          pee
          poop
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChildren = /* GraphQL */ `
  query ListChildren(
    $filter: ModelChildrenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildren(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        name
        dailyStatements {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDailyStatement = /* GraphQL */ `
  query GetDailyStatement($id: ID!) {
    getDailyStatement(id: $id) {
      id
      childrenID
      date
      pee
      poop
      milkProductions {
        items {
          id
          dailyStatementID
          volume
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      milkConsomaions {
        items {
          id
          dailyStatementID
          volume
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDailyStatements = /* GraphQL */ `
  query ListDailyStatements(
    $filter: ModelDailyStatementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyStatements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        childrenID
        date
        pee
        poop
        milkProductions {
          nextToken
        }
        milkConsomaions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMilkProduction = /* GraphQL */ `
  query GetMilkProduction($id: ID!) {
    getMilkProduction(id: $id) {
      id
      dailyStatementID
      volume
      time
      createdAt
      updatedAt
    }
  }
`;
export const listMilkProductions = /* GraphQL */ `
  query ListMilkProductions(
    $filter: ModelMilkProductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMilkProductions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dailyStatementID
        volume
        time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMilkConsomaion = /* GraphQL */ `
  query GetMilkConsomaion($id: ID!) {
    getMilkConsomaion(id: $id) {
      id
      dailyStatementID
      volume
      time
      createdAt
      updatedAt
    }
  }
`;
export const listMilkConsomaions = /* GraphQL */ `
  query ListMilkConsomaions(
    $filter: ModelMilkConsomaionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMilkConsomaions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dailyStatementID
        volume
        time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
