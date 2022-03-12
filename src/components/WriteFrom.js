import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormLayout } from '../pages/styles';

import { writeFormSlice } from '../reducer';

function WriteFrom() {
  const title = useSelector((state) => state.writeForm.title);
  const writer = useSelector((state) => state.writeForm.writer);
  const content = useSelector((state) => state.writeForm.content);
  const dispatch = useDispatch();
  const titChange = (e) => {
    dispatch(writeFormSlice.actions.setTitle(e.target.value));
  };
  const writerChange = (e) => {
    dispatch(writeFormSlice.actions.setWriter(e.target.value));
  };

  const contentChange = (e) => {
    dispatch(writeFormSlice.actions.setContent(e.target.value));
  };
  useEffect(() => {
    dispatch(writeFormSlice.actions.reset());
  }, []);
  return (
    <FormLayout>
      <colgroup>
        <col width='30%' />
        <col width='70%' />
      </colgroup>
      <tbody>
        <tr>
          <th>제목</th>
          <td>
            <input
              type='text'
              placeholder='제목을 입력하세요.'
              onChange={titChange}
              value={title}
            />
          </td>
        </tr>
        <tr>
          <th>작성자</th>
          <td>
            <input
              type='text'
              placeholder='작성자 본인의 성함을 입력해주세요.'
              onChange={writerChange}
              value={writer}
            />
          </td>
        </tr>
        <tr>
          <th>내용</th>
          <td>
            <textarea
              placeholder='내용을 입력하세요.'
              onChange={contentChange}
              value={content}
            />
          </td>
        </tr>
      </tbody>
    </FormLayout>
  );
}
export default WriteFrom;
