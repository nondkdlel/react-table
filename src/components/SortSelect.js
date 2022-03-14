import React from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { apiThunk } from '../reducer';

import { AlignRight } from '../pages/styles';

const Selector = styled.select`
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
`;

function SortSelect() {
  // const dispatch = useDispatch();
  const onChangeSort = (e) => {
    if (e.target.value === 'changeTitleSort') {
      console.log(e.target.value);
      // dispatch(apiThunk());
    }
  };

  return (
    <AlignRight>
      <Selector onChange={ onChangeSort }>
        <option value='changeNumSort'>번호순</option>
        <option value='changeTitleSort'>제목순</option>
        <option value='changeWriterSort'>작성자순</option>
        <option value='changeDateSort'>날짜순</option>
      </Selector>
    </AlignRight>
  );
}

export default SortSelect;