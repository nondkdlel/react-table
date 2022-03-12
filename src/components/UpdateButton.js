import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const UpdateBtn = styled.button`
  background-color: orange;
  border: 1px solid orange;
  color: #fff;
`;

function UpdateButton() {
  return <Link to='/write'><UpdateBtn>글 작성하기</UpdateBtn></Link>
}

export default UpdateButton;