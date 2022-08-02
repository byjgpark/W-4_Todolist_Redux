import React from 'react'; 
import { useState } from "react";

// CSS
import styled from "styled-components";

// redux
import {useDispatch } from 'react-redux';
import {addPost} from '../../redux/modules/todos.js'

// uuid
import uuid from "react-uuid"

function Form() {

      // Title Hook
      const [title, setTitle] = useState("");
      // Content Hook
      const [body, setContent] = useState("");
      // redux
      const dispatch = useDispatch()

  return (
    <AddForm>
      <InputGroup>
        <FormLabel>제목</FormLabel>
        <AddInput value={title} 
          onChange={(e) => {
            // Getting User title input
            setTitle(e.target.value);
          }}  
        >
        </AddInput>
      <FormLabel>내용</FormLabel>
        <AddInput 
          value={body} 
          onChange={(e) => {
            // Getting User title input
            setContent(e.target.value);
          }}  
        >
        </AddInput>
    </InputGroup>
    <AddBtn
      onClick={() => {
        dispatch(
          addPost({
            id: uuid(),
            title: title,
            body: body,
            isDone: false
          })
        )
      setTitle('')
      setContent('')
      }}
    >
      추가하기
    </AddBtn>
    </AddForm>
  );
}

export default Form;

const AddForm = styled.div`
  border: 4px solid green;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;

  align-items: center;
  display: flex;
  gap: 20px;
`
const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`
const AddInput = styled.input`
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
  border: 4px solid green;
`
const AddBtn = styled.button`
  background-color: green;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;

`
