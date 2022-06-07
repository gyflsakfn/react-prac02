import React, { useState } from 'react';

import '../assets/css/reset.css'
import '../assets/css/Test5.css'

const user = [
  {id:1, name:'김정민', age: 23, addr: '경기', done: true},
  {id:2, name:'김다미', age: 28, addr: '서울', done: false},
  {id:3, name:'김성철', age: 25, addr: '포항', done: true},
  {id:4, name:'노의정', age: 32, addr: '진해', done: false},
  {id:5, name:'박진주', age: 29, addr: '마산', done: true},
]

const Test5 = () => {

  const [data, setData] = useState(user)
  
  return ( 
    <>
      <table className='list'>
        <caption>그해 우리는 출연진</caption>
        <colgroup>
          <col className='num' />
          <col className='name' />
          <col className='age' />
          <col className='addr' />
          <col className='consent' />
        </colgroup>

        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
            <th>동의여부</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map( item => 
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.addr}</td>
              <td>{item.done ? '동의':'비동의'}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  );
};

export default Test5;