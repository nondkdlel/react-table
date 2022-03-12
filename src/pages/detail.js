import React from 'react';
import DetailFrom from '../components/DetailFrom';

import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import { BtnArea } from './styles';

function Detail() {
  return (
    <>
    <DetailFrom />
    <BtnArea>
      <EditButton />
      <DeleteButton />
    </BtnArea>
    </>
  );
}

export default Detail;