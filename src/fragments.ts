import gql from "graphql-tag";
export const fragment = gql`
  fragment notes on Note {
    id
    title
    content
  }
`;
