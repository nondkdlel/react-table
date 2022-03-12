import React from 'react';
import styled from 'styled-components';

const EditBtn = styled.button`
  margin-right: 10px;
  border: 1px solid #eee;
  background: #eee;
`

function EditButton(){
  return<EditBtn>수정하기</EditBtn>
};

export default EditButton;
