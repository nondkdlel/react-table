import React from 'react';
import { FormLayout } from '../pages/styles';
import { useSelector, useDispatch } from 'react-redux';

import { titleSlice } from '../reducer';

function WriteFrom (){
  const title = useSelector((state) => state.title.title);
  const dispatch = useDispatch();
  const titChange = (e) => {
    dispatch(titleSlice.actions.setTitle(e.target.value));
  }
  return(
    <FormLayout>
      <colgroup>
        <col width='30%'/>
        <col width='70%'/>
      </colgroup>
      <tbody>
        <tr>
          <th>제목</th>
          <td><input type='text' placeholder='제목을 입력하세요.' onChange={titChange} value={title} /></td>
        </tr>
        <tr>
          <th>작성자</th>
          <td><input type='text' placeholder='작성자 본인의 성함을 입력해주세요.' /></td>
        </tr>
        <tr>
          <th>작성일</th>
          <td><input type='text' disabled value='2022/01/05' /></td>
        </tr>
        <tr>
          <th>내용</th>
          <td><textarea /></td>
        </tr>
      </tbody>
    </FormLayout>
  )
}
export default WriteFrom;