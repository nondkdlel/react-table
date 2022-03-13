import React from 'react';
import styled from 'styled-components';

import { AlignRight } from '../pages/styles';

const Selector = styled.select`
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
`;

function SortSelect() {
  return (
    <AlignRight>
      <Selector>
        <option>번호순</option>
        <option>제목순</option>
        <option>작성자순</option>
        <option>날짜순</option>
      </Selector>
    </AlignRight>
  );
}

export default SortSelect;