import gql from "graphql-tag";

export const NOTE_FRAGMENT = gql`
  fragment notes on Note {
    id
    title
    content
  }
`;
