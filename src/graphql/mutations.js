/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($UserPoolId: String, $Username: String) {
    deleteUser(UserPoolId: $UserPoolId, Username: $Username)
  }
`;
export const addUserToGroup = /* GraphQL */ `
  mutation AddUserToGroup(
    $UserPoolId: String
    $Username: String
    $GroupName: String
  ) {
    addUserToGroup(
      UserPoolId: $UserPoolId
      Username: $Username
      GroupName: $GroupName
    )
  }
`;
export const addGroup = /* GraphQL */ `
  mutation AddGroup($UserPoolId: String, $GroupName: String) {
    addGroup(UserPoolId: $UserPoolId, GroupName: $GroupName)
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup($UserPoolId: String, $GroupName: String) {
    deleteGroup(UserPoolId: $UserPoolId, GroupName: $GroupName)
  }
`;
export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
      id
      name
      description
      image
      archived
      groups
      createdAt
      updatedAt
      preQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
      mainQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
      postQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
    }
  }
`;
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
      id
      name
      description
      image
      archived
      groups
      createdAt
      updatedAt
      preQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
      mainQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
      postQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
    }
  }
`;
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
      id
      name
      description
      image
      archived
      groups
      createdAt
      updatedAt
      preQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
      mainQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
      postQuestionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
    }
  }
`;
export const createQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionnaire(
    $input: CreateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    createQuestionnaire(input: $input, condition: $condition) {
      id
      name
      description
      image
      type
      createdAt
      updatedAt
      question {
        items {
          id
          qu
          type
          isSelf
          isDependent
          order
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateQuestionnaire = /* GraphQL */ `
  mutation UpdateQuestionnaire(
    $input: UpdateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    updateQuestionnaire(input: $input, condition: $condition) {
      id
      name
      description
      image
      type
      createdAt
      updatedAt
      question {
        items {
          id
          qu
          type
          isSelf
          isDependent
          order
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionnaire(
    $input: DeleteQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    deleteQuestionnaire(input: $input, condition: $condition) {
      id
      name
      description
      image
      type
      createdAt
      updatedAt
      question {
        items {
          id
          qu
          type
          isSelf
          isDependent
          order
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      qu
      type
      isSelf
      isDependent
      listOptions {
        listValue
        nextQuestion
        isText
        isMultiple
      }
      order
      dependent {
        id
        options {
          dependentValue
          nextQuestion
        }
      }
      createdAt
      updatedAt
      questionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      qu
      type
      isSelf
      isDependent
      listOptions {
        listValue
        nextQuestion
        isText
        isMultiple
      }
      order
      dependent {
        id
        options {
          dependentValue
          nextQuestion
        }
      }
      createdAt
      updatedAt
      questionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      qu
      type
      isSelf
      isDependent
      listOptions {
        listValue
        nextQuestion
        isText
        isMultiple
      }
      order
      dependent {
        id
        options {
          dependentValue
          nextQuestion
        }
      }
      createdAt
      updatedAt
      questionnaire {
        id
        name
        description
        image
        type
        createdAt
        updatedAt
        question {
          nextToken
        }
      }
    }
  }
`;
export const createResponses = /* GraphQL */ `
  mutation CreateResponses(
    $input: CreateResponsesInput!
    $condition: ModelResponsesConditionInput
  ) {
    createResponses(input: $input, condition: $condition) {
      id
      res
      createdAt
      updatedAt
      qu {
        id
        qu
        type
        isSelf
        isDependent
        listOptions {
          listValue
          nextQuestion
          isText
          isMultiple
        }
        order
        dependent {
          id
        }
        createdAt
        updatedAt
        questionnaire {
          id
          name
          description
          image
          type
          createdAt
          updatedAt
        }
      }
      group {
        id
        startTime
        finishTime
        questionnaireId
        createdAt
        updatedAt
        responses {
          nextToken
        }
        by {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateResponses = /* GraphQL */ `
  mutation UpdateResponses(
    $input: UpdateResponsesInput!
    $condition: ModelResponsesConditionInput
  ) {
    updateResponses(input: $input, condition: $condition) {
      id
      res
      createdAt
      updatedAt
      qu {
        id
        qu
        type
        isSelf
        isDependent
        listOptions {
          listValue
          nextQuestion
          isText
          isMultiple
        }
        order
        dependent {
          id
        }
        createdAt
        updatedAt
        questionnaire {
          id
          name
          description
          image
          type
          createdAt
          updatedAt
        }
      }
      group {
        id
        startTime
        finishTime
        questionnaireId
        createdAt
        updatedAt
        responses {
          nextToken
        }
        by {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteResponses = /* GraphQL */ `
  mutation DeleteResponses(
    $input: DeleteResponsesInput!
    $condition: ModelResponsesConditionInput
  ) {
    deleteResponses(input: $input, condition: $condition) {
      id
      res
      createdAt
      updatedAt
      qu {
        id
        qu
        type
        isSelf
        isDependent
        listOptions {
          listValue
          nextQuestion
          isText
          isMultiple
        }
        order
        dependent {
          id
        }
        createdAt
        updatedAt
        questionnaire {
          id
          name
          description
          image
          type
          createdAt
          updatedAt
        }
      }
      group {
        id
        startTime
        finishTime
        questionnaireId
        createdAt
        updatedAt
        responses {
          nextToken
        }
        by {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createSurveyEntries = /* GraphQL */ `
  mutation CreateSurveyEntries(
    $input: CreateSurveyEntriesInput!
    $condition: ModelSurveyEntriesConditionInput
  ) {
    createSurveyEntries(input: $input, condition: $condition) {
      id
      startTime
      finishTime
      questionnaireId
      createdAt
      updatedAt
      responses {
        items {
          id
          res
          createdAt
          updatedAt
        }
        nextToken
      }
      by {
        id
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateSurveyEntries = /* GraphQL */ `
  mutation UpdateSurveyEntries(
    $input: UpdateSurveyEntriesInput!
    $condition: ModelSurveyEntriesConditionInput
  ) {
    updateSurveyEntries(input: $input, condition: $condition) {
      id
      startTime
      finishTime
      questionnaireId
      createdAt
      updatedAt
      responses {
        items {
          id
          res
          createdAt
          updatedAt
        }
        nextToken
      }
      by {
        id
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteSurveyEntries = /* GraphQL */ `
  mutation DeleteSurveyEntries(
    $input: DeleteSurveyEntriesInput!
    $condition: ModelSurveyEntriesConditionInput
  ) {
    deleteSurveyEntries(input: $input, condition: $condition) {
      id
      startTime
      finishTime
      questionnaireId
      createdAt
      updatedAt
      responses {
        items {
          id
          res
          createdAt
          updatedAt
        }
        nextToken
      }
      by {
        id
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
export const createSurveyUser = /* GraphQL */ `
  mutation CreateSurveyUser(
    $input: CreateSurveyUserInput!
    $condition: ModelSurveyUserConditionInput
  ) {
    createSurveyUser(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateSurveyUser = /* GraphQL */ `
  mutation UpdateSurveyUser(
    $input: UpdateSurveyUserInput!
    $condition: ModelSurveyUserConditionInput
  ) {
    updateSurveyUser(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteSurveyUser = /* GraphQL */ `
  mutation DeleteSurveyUser(
    $input: DeleteSurveyUserInput!
    $condition: ModelSurveyUserConditionInput
  ) {
    deleteSurveyUser(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
