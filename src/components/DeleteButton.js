import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const DeleteBtn = styled.button`
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
`;

function DeleteButton() {
  const { search } = useLocation();
  const id = search.replace('?', '').split('=')[1];
  const navigate = useNavigate();
  const onDelete = async () => {
    await axios
      .delete(`https://crudcrud.com/api/851af311e20445928461272b2d866b56/unicorns/${id}`,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
      )
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <DeleteBtn onClick={onDelete}>삭제하기</DeleteBtn>;
}

export default DeleteButton;
