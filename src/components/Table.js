import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
// import Axios from '../data';
import axios from 'axios';

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
`;

function Table() {
  const [data, setData] = useState(null);

  async function getData() {
    await axios
      .get('https://crudcrud.com/api/2ae5643d46754b858d0330b866f81be2/unicorns')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
   }, []);
console.log(data);

  return (
    <TableLayout>
      <colgroup>
        <col width='10%'/>
        <col width='50%'/>
        <col width='20%'/>
        <col width='20%'/>
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
        {
          data && data.length > 0
          ? (
            data.map((a, i) => (
              <tr key={i}>
                <td><Link to={`/detail?id=${a._id}`}>{ i }</Link></td>
                <td><Link to={`/detail?id=${a._id}`}>{ a.title }</Link></td>
                <td><Link to={`/detail?id=${a._id}`}>{ a.writer }</Link></td>
                <td><Link to={`/detail?id=${a._id}`}>{ a.date }</Link></td>
             </tr>
            ))
          )
          : console.log('data가 없습니다.')

        }
      </tbody>
    </TableLayout>
  );
}

export default Table;