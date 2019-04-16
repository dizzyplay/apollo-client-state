import React, { useState } from "react";
// @ts-ignore
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
// @ts-ignore
import MarkdownRenderer from "react-markdown-renderer";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  background-color: #fdffcc;
  border: 0;
`;

const ContentInput = styled(TextareaAutosize)`
  border: 0;
  font-size: 20px;
  min-height: 200px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  width: 100%;
  background-color: #cce2ff;
  height: 50px;
  font-size: 30px;
`;
interface Props {
  title: string;
  content: string;
  id: number | null;
  onSave: any;
}

export default (props: Props) => {
  const title = useFormInput(props.title || "");
  const content = useFormInput(props.content || "");
  const onSubmit = async () => {
    const { onSave } = props;
    await onSave({ title: title.value, content: content.value, id: props.id });
  };
  return (
    <>
      <TitleInput {...title} />
      <ContentInput {...content} />
      <Button type={"submit"} onClick={onSubmit}>
        submit
      </Button>
      <MarkdownRenderer markdown={content.value} />
    </>
  );
};

const useFormInput = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
};
