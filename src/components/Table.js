import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { apiThunk, pageNaviSlice } from '../reducer';

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
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.keyword.keyword);
  const data = useSelector((state) => state.mainData.list);

  const defaultPage = useSelector((state) => state.pageNavi.page);
  const pageSize = 5;
  const start = (defaultPage - 1) * 5;
  const end = defaultPage * pageSize;
  const resultData = data.filter((item) => item.title.includes(keyword) === true).slice(start, end);
  useEffect(() => {
    dispatch(apiThunk());
   }, [dispatch]);

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
            resultData.map((a, i) => (
              <tr key={i}>
                <td><Link to={`/detail?id=${a._id}`}>{ i }</Link></td>
                <td><Link to={`/detail?id=${a._id}`}>{ a.title }</Link></td>
                <td><Link to={`/detail?id=${a._id}`}>{ a.writer }</Link></td>
                <td><Link to={`/detail?id=${a._id}`}>{ a.date } { a.update }</Link></td>
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