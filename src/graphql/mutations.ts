/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChildren = /* GraphQL */ `
  mutation CreateChildren(
    $input: CreateChildrenInput!
    $condition: ModelChildrenConditionInput
  ) {
    createChildren(input: $input, condition: $condition) {
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
          milkProduction
          milkConsomaion
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
export const updateChildren = /* GraphQL */ `
  mutation UpdateChildren(
    $input: UpdateChildrenInput!
    $condition: ModelChildrenConditionInput
  ) {
    updateChildren(input: $input, condition: $condition) {
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
          milkProduction
          milkConsomaion
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
export const deleteChildren = /* GraphQL */ `
  mutation DeleteChildren(
    $input: DeleteChildrenInput!
    $condition: ModelChildrenConditionInput
  ) {
    deleteChildren(input: $input, condition: $condition) {
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
          milkProduction
          milkConsomaion
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
export const createDailyStatement = /* GraphQL */ `
  mutation CreateDailyStatement(
    $input: CreateDailyStatementInput!
    $condition: ModelDailyStatementConditionInput
  ) {
    createDailyStatement(input: $input, condition: $condition) {
      id
      childrenID
      date
      pee
      poop
      milkProduction
      milkConsomaion
      createdAt
      updatedAt
    }
  }
`;
export const updateDailyStatement = /* GraphQL */ `
  mutation UpdateDailyStatement(
    $input: UpdateDailyStatementInput!
    $condition: ModelDailyStatementConditionInput
  ) {
    updateDailyStatement(input: $input, condition: $condition) {
      id
      childrenID
      date
      pee
      poop
      milkProduction
      milkConsomaion
      createdAt
      updatedAt
    }
  }
`;
export const deleteDailyStatement = /* GraphQL */ `
  mutation DeleteDailyStatement(
    $input: DeleteDailyStatementInput!
    $condition: ModelDailyStatementConditionInput
  ) {
    deleteDailyStatement(input: $input, condition: $condition) {
      id
      childrenID
      date
      pee
      poop
      milkProduction
      milkConsomaion
      createdAt
      updatedAt
    }
  }
`;
