import React from 'react';
import styled from 'styled-components';

const SearchZone = styled.div`
  text-align: right;
  padding-top: 30px;
  input {
    
    font-size: 16px;
    border-radius: 4px;
  }
  input[type='search'] {
    max-width: 260px;
    width: 100%;
    border: 1px solid #ddd;
    padding: 10px;
  }
  input[type='button'] {
    border: 1px solid #000;
    background: #000;
    color: #fff;
    padding: 10px 25px;
    margin-left: 10px;
    cursor: pointer;
  }

`;

function SearchBox() {
  return (
    <SearchZone>
      <input type='search' placeholder='찾으시는 검색어를 입력해주세요.' />
      <input type='button' value='검색' />
    </SearchZone>
  );
}

export default SearchBox;