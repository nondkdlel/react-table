import React from 'react';
import styled from 'styled-components';

const DeleteBtn = styled.button`
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
`

function DeleteButton(){
  return<DeleteBtn>삭제하기</DeleteBtn>
};

export default DeleteButton;
