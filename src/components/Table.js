import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Axios from '../data';
// import axios from 'axios';


const TableLayout = styled.table`
  tr {
    border-bottom: 1px solid #ddd;
  }
  th,td {
    padding: 12px 0;
    text-align: center;
  }

  th {
    font-size: 16px;
    background-color: #eee;
  }
`
 

function Table( ){
  
  Axios();

  return(
    <TableLayout>
      <colgroup>
        <col width="20%"/>
        <col width="40%"/>
        <col width="20%"/>
        <col width="20%"/>
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to='/detail'>1</Link></td>
          <td><Link to='/detail'>제목을 입력하세요2.</Link></td>
          <td><Link to='/detail'>admin2</Link></td>
          <td><Link to='/detail'>2022/01/02</Link></td>
        </tr>     
      </tbody>
    </TableLayout>
  )
};

export default Table;