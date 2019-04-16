import gql from "graphql-tag";

export const GET_NOTES = gql`
  {
    notes @client {
      id
      title
      content
    }
  }
`;

export const GET_NOTE = gql`
  query getNote($id: Int!) {
    note(id: $id) @client {
      id
      title
      content
    }
  }
`;
