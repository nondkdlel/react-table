import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EditBtn = styled.button`
  margin-right: 10px;
  border: 1px solid #eee;
  background: #eee;
`;

function EditButton() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const id = search.replace('?', '').split('=')[1];
  const onClick = () => {
    navigate(`/edit?id=${id}`);
  };
  return <EditBtn onClick={onClick}>수정하기</EditBtn>;
}

export default EditButton;
