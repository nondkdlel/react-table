import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SaveBtn = styled.button`
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  padding: 7px 12px;
  border-radius: 4px;
  font-weight: 500;
  background-color: orange;
  border: 1px solid orange;
  color: #fff;
`;

function SaveButton() {
  const navigate = useNavigate();

  function SaveDone () {

    axios.post('https://crudcrud.com/api/3ed8b0fbf69f4d759ac77e3a6e59fd90/unicorns',{
      
    })
    navigate('/');
  }

  return <SaveBtn onClick={SaveDone}>작성 완료</SaveBtn>
}

export default SaveButton;