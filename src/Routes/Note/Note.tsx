import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_NOTE } from "../../queries";
import { Wrapper, Title, Content, Header } from "../../Styles/shared";
// @ts-ignore
import MarkdownRenderer from "react-markdown-renderer";
import { Link } from "react-router-dom";

export default ({ match }: any) => {
  const { id } = match.params;
  const { data } = useQuery(GET_NOTE, { variables: { id } });
  return (
    <Wrapper>
      {data.note ? (
        <>
          <Header>
            {data.note.title} <Link to={`/edit/${data.note.id}`}>Edit</Link>{" "}
          </Header>
          <Content>
            <MarkdownRenderer markdown={data.note.content} />
          </Content>
        </>
      ) : null}
      <Link to={"/"}> List </Link>
    </Wrapper>
  );
};
