/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChildren = /* GraphQL */ `
  subscription OnCreateChildren {
    onCreateChildren {
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
export const onUpdateChildren = /* GraphQL */ `
  subscription OnUpdateChildren {
    onUpdateChildren {
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
export const onDeleteChildren = /* GraphQL */ `
  subscription OnDeleteChildren {
    onDeleteChildren {
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
export const onCreateDailyStatement = /* GraphQL */ `
  subscription OnCreateDailyStatement {
    onCreateDailyStatement {
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
export const onUpdateDailyStatement = /* GraphQL */ `
  subscription OnUpdateDailyStatement {
    onUpdateDailyStatement {
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
export const onDeleteDailyStatement = /* GraphQL */ `
  subscription OnDeleteDailyStatement {
    onDeleteDailyStatement {
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
