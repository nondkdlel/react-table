import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { mainDataSlice } from '../reducer';

import { AlignRight } from '../pages/styles';

const Selector = styled.select`
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
`;

function SortSelect() {
  const dispatch = useDispatch();
  // const navi = useNavigate();
  const data = useSelector((state) => state.mainData.list);
  const onChangeSort = (e) => {
    if (data && data.length > 0) {
      if (e.target.value === 'changeTitleSort') {
        dispatch(mainDataSlice.actions.titleSort(data));
      }
      if (e.target.value === 'changeWriterSort') {
        dispatch(mainDataSlice.actions.writerSort(data));
      }
      if (e.target.value === 'changeDateSort') {
        dispatch(mainDataSlice.actions.dateSort(data));
      }
    }
  };

  return (
    <AlignRight>
      <Selector onChange={ onChangeSort }>
        <option value='changeTitleSort'>제목순</option>
        <option value='changeWriterSort'>작성자순</option>
        <option value='changeDateSort'>날짜순</option>
      </Selector>
    </AlignRight>
  );
}

export default SortSelect;