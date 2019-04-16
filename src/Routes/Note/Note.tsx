import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_NOTE } from "../../queries";
import { Wrapper, Title, Content, Header } from "../../Styles/shared";

export default ({ match }: any) => {
  const { id } = match.params;
  const { data } = useQuery(GET_NOTE, { variables: { id } });
  return (
    <Wrapper>
      {data.note ? (
        <>
          {" "}
          <Header>{data.note.title}</Header>
          <Content>{data.note.content}</Content>
        </>
      ) : null}
    </Wrapper>
  );
};
