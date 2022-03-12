import React from 'react';
import styled from 'styled-components';

import { AlignCenter } from './styles';

import WriteFrom from '../components/WriteFrom';
import SaveButton from '../components/SaveButton';

const Thead = styled.h1`
  font-size: 22px;
  text-align: center;
`;

function Write() {
  return (
    <>
    <Thead>작성하기</Thead>
    <WriteFrom />
    <AlignCenter>
      <SaveButton />
    </AlignCenter>
    </>
  );
}

export default Write;