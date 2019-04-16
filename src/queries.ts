import gql from "graphql-tag";
import { NOTE_FRAGMENT } from "./fragments";

export const GET_NOTES = gql`
  query {
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
      ...notes
    }
  }
  ${NOTE_FRAGMENT}
`;

export const EDIT_NOTE = gql`
  mutation editNote($id: Int!, $title: String!, $content: String!) @client {
    editNote(id: $id, title: $title, content: $content) {
      ...notes
    }
  }
  ${NOTE_FRAGMENT}
`;
