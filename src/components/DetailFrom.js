import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
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
`;

function DetailFrom() {
  const [data, setData] = useState(null);
  const { search } = useLocation();
  const id = search.replace('?', '').split('=')[1];

  async function getDetail() {
    await axios.get(`https://crudcrud.com/api/851af311e20445928461272b2d866b56/unicorns/${id}`)
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <From>
      <Head>
        <h1>{ data && data.title ? data.title : '' }</h1>
        <FormInfo>
          <ul>
            <li>작성자</li>
            <li>{ data && data.writer ? data.writer : '' }</li>
          </ul>
          <ul>
            <li>작성일</li>
            <li>{ data && data.date ? data.date : '' }</li>
          </ul>
        </FormInfo>
        </Head>
        <Formfield>
          <pre>{ data && data.content ? data.content : '' }</pre>
        </Formfield>
    </From>
  );
}

export default DetailFrom;