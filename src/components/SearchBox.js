import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { keywordSlice } from '../reducer';

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
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.keyword.keyword);

  const onChange = (e) => {
    dispatch(keywordSlice.actions.setTitle(e.target.value));
  };

  return (
    <SearchZone>
      <input type='search' onChange={ onChange } value={keyword} placeholder='찾으시는 검색어를 입력해주세요.' />
      {/* <input type='button' value='검색' onClick={} /> */}
    </SearchZone>
  );
}

export default SearchBox;
// TODO 원본데이터는 유지하되, 검색 시 검색키워드에 필터링하여 검색된 데이터를 보여주기. 검색된 데이터는 store에 저장
