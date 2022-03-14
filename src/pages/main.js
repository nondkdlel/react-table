import React from 'react';

import { BtnArea } from './styles';

import SortSelect from '../components/SortSelect';
import Table from '../components/Table';
import UpdateButton from '../components/UpdateButton';
import SearchBox from '../components/SearchBox';
import Pagination from '../components/Pagination';

function Main() {
  return (
    <>
    <SortSelect />
    <Table />
    <BtnArea>
    <UpdateButton />
    <SearchBox />
    <Pagination />
    </BtnArea>
    </>
  );
}

export default Main;