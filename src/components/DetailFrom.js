import React from 'react';
import styled from 'styled-components';

const From = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

`;
const Head = styled.div`
  padding: 20px;
  background-color: #eee;
  h1 {
    font-size:22px ;
    text-align: center;
  }
`;
const FormInfo = styled.div`
  text-align: right;
  ul {
    display: inline-block;
    vertical-align: middle;
    font-size:0;
  }
  li {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: #666;
  }
`;
const Formfield = styled.div`
  border: 1px solid #ddd;
  padding: 50px;
  p {
    font-size: 16px;
  }
`

function DetailFrom(){
  return(
    <From>
      <Head>
        <h1>제목을 입력하세요1.</h1>
        <FormInfo>
          <ul>
            <li>작성자</li>
            <li>admin1</li>
          </ul>
          <ul>
            <li>작성일</li>
            <li>2022/01/01</li>
          </ul>
        </FormInfo>
        </Head>
        <Formfield>
          <p>내용이 보여지는 곳입니다.</p>
          <p>내용이 보여지는 곳입니다.</p>
          <p>내용이 보여지는 곳입니다.</p>
          <p>내용이 보여지는 곳입니다.</p>
          <p>내용이 보여지는 곳입니다.</p>
        </Formfield>
    </From>
  )
}

export default DetailFrom;