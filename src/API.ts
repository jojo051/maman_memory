/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  childrens?: ModelChildrenConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChildrenConnection = {
  __typename: "ModelChildrenConnection",
  items:  Array<Children | null >,
  nextToken?: string | null,
};

export type Children = {
  __typename: "Children",
  id: string,
  userID: string,
  name: string,
  dailyStatements?: ModelDailyStatementConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDailyStatementConnection = {
  __typename: "ModelDailyStatementConnection",
  items:  Array<DailyStatement | null >,
  nextToken?: string | null,
};

export type DailyStatement = {
  __typename: "DailyStatement",
  id: string,
  childrenID: string,
  date: string,
  pee?: number | null,
  poop?: number | null,
  milkProductions?: ModelMilkProductionConnection | null,
  milkConsomaions?: ModelMilkConsomaionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMilkProductionConnection = {
  __typename: "ModelMilkProductionConnection",
  items:  Array<MilkProduction | null >,
  nextToken?: string | null,
};

export type MilkProduction = {
  __typename: "MilkProduction",
  id: string,
  dailyStatementID: string,
  volume?: string | null,
  time?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMilkConsomaionConnection = {
  __typename: "ModelMilkConsomaionConnection",
  items:  Array<MilkConsomaion | null >,
  nextToken?: string | null,
};

export type MilkConsomaion = {
  __typename: "MilkConsomaion",
  id: string,
  dailyStatementID: string,
  volume?: string | null,
  time?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChildrenInput = {
  id?: string | null,
  userID: string,
  name: string,
};

export type ModelChildrenConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelChildrenConditionInput | null > | null,
  or?: Array< ModelChildrenConditionInput | null > | null,
  not?: ModelChildrenConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChildrenInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
};

export type DeleteChildrenInput = {
  id: string,
};

export type CreateDailyStatementInput = {
  id?: string | null,
  childrenID: string,
  date: string,
  pee?: number | null,
  poop?: number | null,
};

export type ModelDailyStatementConditionInput = {
  childrenID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  pee?: ModelIntInput | null,
  poop?: ModelIntInput | null,
  and?: Array< ModelDailyStatementConditionInput | null > | null,
  or?: Array< ModelDailyStatementConditionInput | null > | null,
  not?: ModelDailyStatementConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDailyStatementInput = {
  id: string,
  childrenID?: string | null,
  date?: string | null,
  pee?: number | null,
  poop?: number | null,
};

export type DeleteDailyStatementInput = {
  id: string,
};

export type CreateMilkProductionInput = {
  id?: string | null,
  dailyStatementID: string,
  volume?: string | null,
  time?: string | null,
};

export type ModelMilkProductionConditionInput = {
  dailyStatementID?: ModelIDInput | null,
  volume?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelMilkProductionConditionInput | null > | null,
  or?: Array< ModelMilkProductionConditionInput | null > | null,
  not?: ModelMilkProductionConditionInput | null,
};

export type UpdateMilkProductionInput = {
  id: string,
  dailyStatementID?: string | null,
  volume?: string | null,
  time?: string | null,
};

export type DeleteMilkProductionInput = {
  id: string,
};

export type CreateMilkConsomaionInput = {
  id?: string | null,
  dailyStatementID: string,
  volume?: string | null,
  time?: string | null,
};

export type ModelMilkConsomaionConditionInput = {
  dailyStatementID?: ModelIDInput | null,
  volume?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelMilkConsomaionConditionInput | null > | null,
  or?: Array< ModelMilkConsomaionConditionInput | null > | null,
  not?: ModelMilkConsomaionConditionInput | null,
};

export type UpdateMilkConsomaionInput = {
  id: string,
  dailyStatementID?: string | null,
  volume?: string | null,
  time?: string | null,
};

export type DeleteMilkConsomaionInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelChildrenFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelChildrenFilterInput | null > | null,
  or?: Array< ModelChildrenFilterInput | null > | null,
  not?: ModelChildrenFilterInput | null,
};

export type ModelDailyStatementFilterInput = {
  id?: ModelIDInput | null,
  childrenID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  pee?: ModelIntInput | null,
  poop?: ModelIntInput | null,
  and?: Array< ModelDailyStatementFilterInput | null > | null,
  or?: Array< ModelDailyStatementFilterInput | null > | null,
  not?: ModelDailyStatementFilterInput | null,
};

export type ModelMilkProductionFilterInput = {
  id?: ModelIDInput | null,
  dailyStatementID?: ModelIDInput | null,
  volume?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelMilkProductionFilterInput | null > | null,
  or?: Array< ModelMilkProductionFilterInput | null > | null,
  not?: ModelMilkProductionFilterInput | null,
};

export type ModelMilkConsomaionFilterInput = {
  id?: ModelIDInput | null,
  dailyStatementID?: ModelIDInput | null,
  volume?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelMilkConsomaionFilterInput | null > | null,
  or?: Array< ModelMilkConsomaionFilterInput | null > | null,
  not?: ModelMilkConsomaionFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    childrens?:  {
      __typename: "ModelChildrenConnection",
      items:  Array< {
        __typename: "Children",
        id: string,
        userID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    childrens?:  {
      __typename: "ModelChildrenConnection",
      items:  Array< {
        __typename: "Children",
        id: string,
        userID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    childrens?:  {
      __typename: "ModelChildrenConnection",
      items:  Array< {
        __typename: "Children",
        id: string,
        userID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChildrenMutationVariables = {
  input: CreateChildrenInput,
  condition?: ModelChildrenConditionInput | null,
};

export type CreateChildrenMutation = {
  createChildren?:  {
    __typename: "Children",
    id: string,
    userID: string,
    name: string,
    dailyStatements?:  {
      __typename: "ModelDailyStatementConnection",
      items:  Array< {
        __typename: "DailyStatement",
        id: string,
        childrenID: string,
        date: string,
        pee?: number | null,
        poop?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChildrenMutationVariables = {
  input: UpdateChildrenInput,
  condition?: ModelChildrenConditionInput | null,
};

export type UpdateChildrenMutation = {
  updateChildren?:  {
    __typename: "Children",
    id: string,
    userID: string,
    name: string,
    dailyStatements?:  {
      __typename: "ModelDailyStatementConnection",
      items:  Array< {
        __typename: "DailyStatement",
        id: string,
        childrenID: string,
        date: string,
        pee?: number | null,
        poop?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChildrenMutationVariables = {
  input: DeleteChildrenInput,
  condition?: ModelChildrenConditionInput | null,
};

export type DeleteChildrenMutation = {
  deleteChildren?:  {
    __typename: "Children",
    id: string,
    userID: string,
    name: string,
    dailyStatements?:  {
      __typename: "ModelDailyStatementConnection",
      items:  Array< {
        __typename: "DailyStatement",
        id: string,
        childrenID: string,
        date: string,
        pee?: number | null,
        poop?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDailyStatementMutationVariables = {
  input: CreateDailyStatementInput,
  condition?: ModelDailyStatementConditionInput | null,
};

export type CreateDailyStatementMutation = {
  createDailyStatement?:  {
    __typename: "DailyStatement",
    id: string,
    childrenID: string,
    date: string,
    pee?: number | null,
    poop?: number | null,
    milkProductions?:  {
      __typename: "ModelMilkProductionConnection",
      items:  Array< {
        __typename: "MilkProduction",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    milkConsomaions?:  {
      __typename: "ModelMilkConsomaionConnection",
      items:  Array< {
        __typename: "MilkConsomaion",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDailyStatementMutationVariables = {
  input: UpdateDailyStatementInput,
  condition?: ModelDailyStatementConditionInput | null,
};

export type UpdateDailyStatementMutation = {
  updateDailyStatement?:  {
    __typename: "DailyStatement",
    id: string,
    childrenID: string,
    date: string,
    pee?: number | null,
    poop?: number | null,
    milkProductions?:  {
      __typename: "ModelMilkProductionConnection",
      items:  Array< {
        __typename: "MilkProduction",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    milkConsomaions?:  {
      __typename: "ModelMilkConsomaionConnection",
      items:  Array< {
        __typename: "MilkConsomaion",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDailyStatementMutationVariables = {
  input: DeleteDailyStatementInput,
  condition?: ModelDailyStatementConditionInput | null,
};

export type DeleteDailyStatementMutation = {
  deleteDailyStatement?:  {
    __typename: "DailyStatement",
    id: string,
    childrenID: string,
    date: string,
    pee?: number | null,
    poop?: number | null,
    milkProductions?:  {
      __typename: "ModelMilkProductionConnection",
      items:  Array< {
        __typename: "MilkProduction",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    milkConsomaions?:  {
      __typename: "ModelMilkConsomaionConnection",
      items:  Array< {
        __typename: "MilkConsomaion",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMilkProductionMutationVariables = {
  input: CreateMilkProductionInput,
  condition?: ModelMilkProductionConditionInput | null,
};

export type CreateMilkProductionMutation = {
  createMilkProduction?:  {
    __typename: "MilkProduction",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMilkProductionMutationVariables = {
  input: UpdateMilkProductionInput,
  condition?: ModelMilkProductionConditionInput | null,
};

export type UpdateMilkProductionMutation = {
  updateMilkProduction?:  {
    __typename: "MilkProduction",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMilkProductionMutationVariables = {
  input: DeleteMilkProductionInput,
  condition?: ModelMilkProductionConditionInput | null,
};

export type DeleteMilkProductionMutation = {
  deleteMilkProduction?:  {
    __typename: "MilkProduction",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMilkConsomaionMutationVariables = {
  input: CreateMilkConsomaionInput,
  condition?: ModelMilkConsomaionConditionInput | null,
};

export type CreateMilkConsomaionMutation = {
  createMilkConsomaion?:  {
    __typename: "MilkConsomaion",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMilkConsomaionMutationVariables = {
  input: UpdateMilkConsomaionInput,
  condition?: ModelMilkConsomaionConditionInput | null,
};

export type UpdateMilkConsomaionMutation = {
  updateMilkConsomaion?:  {
    __typename: "MilkConsomaion",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMilkConsomaionMutationVariables = {
  input: DeleteMilkConsomaionInput,
  condition?: ModelMilkConsomaionConditionInput | null,
};

export type DeleteMilkConsomaionMutation = {
  deleteMilkConsomaion?:  {
    __typename: "MilkConsomaion",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    childrens?:  {
      __typename: "ModelChildrenConnection",
      items:  Array< {
        __typename: "Children",
        id: string,
        userID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      childrens?:  {
        __typename: "ModelChildrenConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChildrenQueryVariables = {
  id: string,
};

export type GetChildrenQuery = {
  getChildren?:  {
    __typename: "Children",
    id: string,
    userID: string,
    name: string,
    dailyStatements?:  {
      __typename: "ModelDailyStatementConnection",
      items:  Array< {
        __typename: "DailyStatement",
        id: string,
        childrenID: string,
        date: string,
        pee?: number | null,
        poop?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChildrenQueryVariables = {
  filter?: ModelChildrenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChildrenQuery = {
  listChildren?:  {
    __typename: "ModelChildrenConnection",
    items:  Array< {
      __typename: "Children",
      id: string,
      userID: string,
      name: string,
      dailyStatements?:  {
        __typename: "ModelDailyStatementConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDailyStatementQueryVariables = {
  id: string,
};

export type GetDailyStatementQuery = {
  getDailyStatement?:  {
    __typename: "DailyStatement",
    id: string,
    childrenID: string,
    date: string,
    pee?: number | null,
    poop?: number | null,
    milkProductions?:  {
      __typename: "ModelMilkProductionConnection",
      items:  Array< {
        __typename: "MilkProduction",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    milkConsomaions?:  {
      __typename: "ModelMilkConsomaionConnection",
      items:  Array< {
        __typename: "MilkConsomaion",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDailyStatementsQueryVariables = {
  filter?: ModelDailyStatementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDailyStatementsQuery = {
  listDailyStatements?:  {
    __typename: "ModelDailyStatementConnection",
    items:  Array< {
      __typename: "DailyStatement",
      id: string,
      childrenID: string,
      date: string,
      pee?: number | null,
      poop?: number | null,
      milkProductions?:  {
        __typename: "ModelMilkProductionConnection",
        nextToken?: string | null,
      } | null,
      milkConsomaions?:  {
        __typename: "ModelMilkConsomaionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMilkProductionQueryVariables = {
  id: string,
};

export type GetMilkProductionQuery = {
  getMilkProduction?:  {
    __typename: "MilkProduction",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMilkProductionsQueryVariables = {
  filter?: ModelMilkProductionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMilkProductionsQuery = {
  listMilkProductions?:  {
    __typename: "ModelMilkProductionConnection",
    items:  Array< {
      __typename: "MilkProduction",
      id: string,
      dailyStatementID: string,
      volume?: string | null,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMilkConsomaionQueryVariables = {
  id: string,
};

export type GetMilkConsomaionQuery = {
  getMilkConsomaion?:  {
    __typename: "MilkConsomaion",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMilkConsomaionsQueryVariables = {
  filter?: ModelMilkConsomaionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMilkConsomaionsQuery = {
  listMilkConsomaions?:  {
    __typename: "ModelMilkConsomaionConnection",
    items:  Array< {
      __typename: "MilkConsomaion",
      id: string,
      dailyStatementID: string,
      volume?: string | null,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    childrens?:  {
      __typename: "ModelChildrenConnection",
      items:  Array< {
        __typename: "Children",
        id: string,
        userID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    childrens?:  {
      __typename: "ModelChildrenConnection",
      items:  Array< {
        __typename: "Children",
        id: string,
        userID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    childrens?:  {
      __typename: "ModelChildrenConnection",
      items:  Array< {
        __typename: "Children",
        id: string,
        userID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChildrenSubscription = {
  onCreateChildren?:  {
    __typename: "Children",
    id: string,
    userID: string,
    name: string,
    dailyStatements?:  {
      __typename: "ModelDailyStatementConnection",
      items:  Array< {
        __typename: "DailyStatement",
        id: string,
        childrenID: string,
        date: string,
        pee?: number | null,
        poop?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChildrenSubscription = {
  onUpdateChildren?:  {
    __typename: "Children",
    id: string,
    userID: string,
    name: string,
    dailyStatements?:  {
      __typename: "ModelDailyStatementConnection",
      items:  Array< {
        __typename: "DailyStatement",
        id: string,
        childrenID: string,
        date: string,
        pee?: number | null,
        poop?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChildrenSubscription = {
  onDeleteChildren?:  {
    __typename: "Children",
    id: string,
    userID: string,
    name: string,
    dailyStatements?:  {
      __typename: "ModelDailyStatementConnection",
      items:  Array< {
        __typename: "DailyStatement",
        id: string,
        childrenID: string,
        date: string,
        pee?: number | null,
        poop?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDailyStatementSubscription = {
  onCreateDailyStatement?:  {
    __typename: "DailyStatement",
    id: string,
    childrenID: string,
    date: string,
    pee?: number | null,
    poop?: number | null,
    milkProductions?:  {
      __typename: "ModelMilkProductionConnection",
      items:  Array< {
        __typename: "MilkProduction",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    milkConsomaions?:  {
      __typename: "ModelMilkConsomaionConnection",
      items:  Array< {
        __typename: "MilkConsomaion",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDailyStatementSubscription = {
  onUpdateDailyStatement?:  {
    __typename: "DailyStatement",
    id: string,
    childrenID: string,
    date: string,
    pee?: number | null,
    poop?: number | null,
    milkProductions?:  {
      __typename: "ModelMilkProductionConnection",
      items:  Array< {
        __typename: "MilkProduction",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    milkConsomaions?:  {
      __typename: "ModelMilkConsomaionConnection",
      items:  Array< {
        __typename: "MilkConsomaion",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDailyStatementSubscription = {
  onDeleteDailyStatement?:  {
    __typename: "DailyStatement",
    id: string,
    childrenID: string,
    date: string,
    pee?: number | null,
    poop?: number | null,
    milkProductions?:  {
      __typename: "ModelMilkProductionConnection",
      items:  Array< {
        __typename: "MilkProduction",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    milkConsomaions?:  {
      __typename: "ModelMilkConsomaionConnection",
      items:  Array< {
        __typename: "MilkConsomaion",
        id: string,
        dailyStatementID: string,
        volume?: string | null,
        time?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMilkProductionSubscription = {
  onCreateMilkProduction?:  {
    __typename: "MilkProduction",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMilkProductionSubscription = {
  onUpdateMilkProduction?:  {
    __typename: "MilkProduction",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMilkProductionSubscription = {
  onDeleteMilkProduction?:  {
    __typename: "MilkProduction",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMilkConsomaionSubscription = {
  onCreateMilkConsomaion?:  {
    __typename: "MilkConsomaion",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMilkConsomaionSubscription = {
  onUpdateMilkConsomaion?:  {
    __typename: "MilkConsomaion",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMilkConsomaionSubscription = {
  onDeleteMilkConsomaion?:  {
    __typename: "MilkConsomaion",
    id: string,
    dailyStatementID: string,
    volume?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
