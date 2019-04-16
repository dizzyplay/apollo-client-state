import React from "react";
import { GET_NOTES } from "../../queries";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import { Wrapper, Header, Title } from "../../Styles/shared";

export default () => {
  const { data } = useQuery(GET_NOTES);
  console.log(data);
  return (
    <Wrapper>
      <Header>
        {" "}
        apollo local state Note -<Link to={"/add"}> ADD NOTE</Link>{" "}
      </Header>
      {data.notes.map((note: any) => (
        <Link to={`/note/${note.id}`} key={note.id}>
          <Title key={note.id}>
            {note.id} - {note.title}
          </Title>
        </Link>
      ))}
    </Wrapper>
  );
};
