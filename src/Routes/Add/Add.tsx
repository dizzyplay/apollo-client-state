import React, { useState } from "react";
import { Wrapper } from "../../Styles/shared";
import styled from "styled-components";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import Editor from "../../Components/Editor";

const ADD_NOTE = gql`
  mutation createNote($title: String, $content: String) {
    createNote(title: $title, content: $content) @client
  }
`;

export default () => {
  const addNoteMutation = useMutation(ADD_NOTE);
  return (
    <Wrapper>
      <Editor title={""} content={""} id={null} onSave={addNoteMutation} />
    </Wrapper>
  );
};
