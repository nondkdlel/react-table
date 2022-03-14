import React from 'react';
import styled from 'styled-components';

const PageNum = styled.div`
  text-align: center;
  padding-top: 50px;
  button {
    font-size: 16px;
    width: 30px; 
    height: 30px;
    line-height: 1;
    background: transparent;
    border: 1px solid #000;
    text-align: center;
    border-radius: 50% !important;
    padding: 0 !important;
    margin: 0 5px;
  }
  button.on {
    background: #000;
    color: #fff;
  }
`;

function Pagination() {
  return (
    <PageNum>
      <button className='on'>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </PageNum>
  );
}

export default Pagination;