import { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
  const [data, setData] = useState(null);

  // useEffect(()=> {
  //   axios
  //     .post('https://crudcrud.com/api/3ed8b0fbf69f4d759ac77e3a6e59fd90/unicorns', {
  //       data: [
  //         {
  //           id : '1',
  //           title : '제목을 입력하세요1',
  //           write : 'admin1',
  //           date: '20220101'
  //         },
  //         {
  //           id : '2',
  //           title : '제목을 입력하세요2',
  //           write : 'admin2',
  //           date: '20220102'
  //         },
  //         {
  //           id : '3',
  //           title : '제목을 입력하세요3',
  //           write : 'admin3',
  //           date: '20220103'
  //         },
  //         {
  //           id : '4',
  //           title : '제목을 입력하세요4',
  //           write : 'admin4',
  //           date: '20220104'
  //         },
  //         {
  //           id : '5',
  //           title : '제목을 입력하세요5',
  //           write : 'admin5',
  //           date: '20220105'
  //         },
  //         {
  //           id : '6',
  //           title : '제목을 입력하세요6',
  //           write : 'admin6',
  //           date: '20220106'
  //         },
  //         {
  //           id : '7',
  //           title : '제목을 입력하세요7',
  //           write : 'admin7',
  //           date: '20220107'
  //         },
  //       ]
  //     },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json; charset=utf-8',
  //       },
  //     })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get('https://crudcrud.com/api/3ed8b0fbf69f4d759ac77e3a6e59fd90/unicorns')
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(setData);

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })

  //   },[])
}

export default Axios;
