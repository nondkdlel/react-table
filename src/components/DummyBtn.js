import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { apiThunk } from '../reducer';

const CreateBtn = styled.button`
    background-color: aquamarine;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid aquamarine;
    margin-top : 40px;
`;

function DummyBtn() {
  const dispatch = useDispatch();
  const [isCheck, setIsCheck] = React.useState(false);

  function createBtn() {
    const nowDate = new Date().toISOString();
    const year = nowDate.substring(0, 4);
    const month = nowDate.substring(5, 7);
    const day = nowDate.substring(8, 10);

    Array.from(Array(6).keys()).forEach(async (idx, i) => {
      await axios
        .post('https://crudcrud.com/api/851af311e20445928461272b2d866b56/unicorns/',
        {
          title: `제목${idx + 1}`,
          writer: `작성자${idx + 1}`,
          date: `${Number(year) + idx + 1}/${month}/${day}`,
          content: `kdsfldskfsosod soso내요잉입니다.${idx}`,
        });
      if (i === 5) {
        setIsCheck(true);
      }
    });
  }

  useEffect(() => {
    if (isCheck) {
      dispatch(apiThunk());
      setIsCheck(false);
    }
  }, [isCheck]);

  return (
    <>
    <CreateBtn type='button' onClick={ createBtn }>생성하기</CreateBtn>
    </>
  );
}
export default DummyBtn;