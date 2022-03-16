import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { pageNaviSlice } from '../reducer';

const PageNum = styled.div`
  text-align: center;
  padding-top: 50px;
  button {
    font-size: 16px;
    width: 30px; 
    height: 30px;
    line-height: 1;
    background: transparent;
    border: 1px solid #000;
    text-align: center;
    border-radius: 50% !important;
    padding: 0 !important;
    margin: 0 5px;
  }
  button.on {
    background: #000;
    color: #fff;
  }
`;

function Pagination() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mainData.list);
  const defaultPage = useSelector((state) => state.pageNavi.page);
  const pageSize = 5;
  const lastPage = Math.ceil(data.length / pageSize);

  const arr = Array.from(Array(lastPage).keys());
  console.log(arr);
  const pagi = (num) => {
    dispatch(pageNaviSlice.actions.setPage(num));
  };
  return (
    <PageNum>
      {
        arr.map((a, i) => (
          <button
          key={ i }
          className={ defaultPage === (a + 1) ? 'on' : null }
          onClick={() => pagi(a + 1)}>{ a + 1 }</button>
        ))
      }
    </PageNum>
  );
}

export default Pagination;