import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { AlignCenter } from './styles';

import { writeFormSlice } from '../reducer';

import WriteFrom from '../components/WriteFrom';
import SaveButton from '../components/SaveButton';

const Thead = styled.h1`
  font-size: 22px;
  text-align: center;
`;

function Edit() {
  const { search } = useLocation();
  const id = search.replace('?', '').split('=')[1];
  const dispatch = useDispatch();

  async function getDetail() {
    await axios.get(`https://crudcrud.com/api/851af311e20445928461272b2d866b56/unicorns/${id}`)
    .then((res) => {
      console.log(res);
      dispatch(writeFormSlice.actions.setTitle(res.data.title));
      dispatch(writeFormSlice.actions.setWriter(res.data.writer));
      dispatch(writeFormSlice.actions.setContent(res.data.content));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
    <Thead>수정하기</Thead>
    <WriteFrom />
    <AlignCenter>
      <SaveButton method='put' id={id} />
    </AlignCenter>
    </>
  );
}

export default Edit;