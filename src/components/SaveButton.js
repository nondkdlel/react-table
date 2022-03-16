import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SaveBtn = styled.button`
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: 500;
  background-color: orange;
  border: 1px solid orange;
  color: #fff;
`;

function SaveButton({ method = 'post', id }) {
  const navigate = useNavigate();
  const updateTitle = useSelector((state) => state.writeForm.title);
  const updateWriter = useSelector((state) => state.writeForm.writer);
  const updateContent = useSelector((state) => state.writeForm.content);

  async function SaveDone() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const todayFormat = `${year}/${month}/${date}`;
    // console.log(todayFormat);

    const post = {
      title: updateTitle,
      writer: updateWriter,
      content: updateContent,
    };
    let url = 'https://crudcrud.com/api/00b7be8bd7924e45a811ca7d9f1db4ed/unicorns';
    if (method === 'put') {
      post.update = todayFormat;
      url = `https://crudcrud.com/api/00b7be8bd7924e45a811ca7d9f1db4ed/unicorns/${id}`;
    }
    if (method === 'post') {
      post.date = todayFormat;
    }

    await axios[method](url, post, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    .then((res) => {
      console.log(res);
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return <SaveBtn onClick={SaveDone}>작성 완료</SaveBtn>;
}

export default SaveButton;
