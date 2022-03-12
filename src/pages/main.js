import React from 'react';

import Table from '../components/Table';
import { BtnArea } from './styles';
import UpdateButton from '../components/UpdateButton';

function Main() {
  return(
    <>
    <Table />
    <BtnArea>
      <UpdateButton />  
    </BtnArea>    
    </>
  )
}

export default Main;