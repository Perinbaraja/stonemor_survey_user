/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers($UserPoolId: String) {
    listUsers(UserPoolId: $UserPoolId)
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups($UserPoolId: String) {
    listGroups(UserPoolId: $UserPoolId)
  }
`;
export const listGroupMembers = /* GraphQL */ `
  query ListGroupMembers($UserPoolId: String, $GroupName: String) {
    listGroupMembers(UserPoolId: $UserPoolId, GroupName: $GroupName)
  }
`;
export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
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
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        mainQuestionnaire {
          id
          name
          description
          image
          type
          createdAt
          updatedAt
        }
        postQuestionnaire {
          id
          name
          description
          image
          type
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getQuestionnaire = /* GraphQL */ `
  query GetQuestionnaire($id: ID!) {
    getQuestionnaire(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
      question(limit: 200) {
        items {
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
          dependent {
            id
            options {
              dependentValue
              nextQuestion
            }
          }
          order
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listQuestionnaires = /* GraphQL */ `
  query ListQuestionnaires(
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionnaires(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getResponses = /* GraphQL */ `
  query GetResponses($id: ID!) {
    getResponses(id: $id) {
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
export const listResponsess = /* GraphQL */ `
  query ListResponsess(
    $filter: ModelResponsesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponsess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          order
          createdAt
          updatedAt
        }
        group {
          id
          startTime
          finishTime
          questionnaireId
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getSurveyEntries = /* GraphQL */ `
  query GetSurveyEntries($id: ID!) {
    getSurveyEntries(id: $id) {
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
export const listSurveyEntriess = /* GraphQL */ `
  query ListSurveyEntriess(
    $filter: ModelSurveyEntriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyEntriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            qu {
              id
              qu
              type
              isSelf
              isDependent
              order
              createdAt
              updatedAt
            }
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
      nextToken
    }
  }
`;
export const getSurveyUser = /* GraphQL */ `
  query GetSurveyUser($id: ID!) {
    getSurveyUser(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const listSurveyUsers = /* GraphQL */ `
  query ListSurveyUsers(
    $filter: ModelSurveyUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
