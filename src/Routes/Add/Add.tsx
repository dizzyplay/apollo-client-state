import React, { useState } from "react";
import { Wrapper } from "../../Styles/shared";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import Editor from "../../Components/Editor";

const ADD_NOTE = gql`
  mutation createNote($title: String, $content: String) {
    createNote(title: $title, content: $content) @client
  }
`;

export default (props: any) => {
  const addNoteMutation = useMutation(ADD_NOTE);
  const onSave = async ({ title, content }: any) => {
    if (title && content) {
      await addNoteMutation({ variables: { title, content } });
      props.history.push("/");
    } else {
      alert("need content");
    }
  };

  return (
    <Wrapper>
      <Editor title={""} content={""} id={null} onSave={onSave} />
    </Wrapper>
  );
};
