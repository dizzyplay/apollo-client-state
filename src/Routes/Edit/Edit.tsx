import React from "react";
import Editor from "../../Components/Editor";
import { useMutation, useQuery } from "react-apollo-hooks";
import { EDIT_NOTE, GET_NOTE } from "../../queries";
import { Wrapper } from "../../Styles/shared";

export default ({ match, history }: any) => {
  const {
    params: { id }
  } = match;
  const { data }: any = useQuery(GET_NOTE, { variables: { id } });
  const editNoteMutation = useMutation(EDIT_NOTE);

  const onSave = async ({ title, content, id }: any) => {
    await editNoteMutation({ variables: { title, content, id } });
    history.push(`/note/${match.params.id}`);
  };
  return (
    <Wrapper>
      {data.note ? (
        <Editor
          title={data.note.title}
          content={data.note.content}
          id={data.note.id}
          onSave={onSave}
        />
      ) : (
        <div />
      )}
    </Wrapper>
  );
};
