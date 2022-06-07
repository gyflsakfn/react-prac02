import React from 'react';

const Test1 = () => {
  const title = '신상명세서'
  const arr = ['김다미', '김태리', '최진혁', '남주혁', '송혜교']
  const data = [
    {id: 1, name: '김다미'},
    {id: 2, name: '김태리'},
    {id: 3, name: '최진혁'},
    {id: 4, name: '남주혁'},
    {id: 5, name: '송혜교'}
  ]

  return (
    <>
    <h2>{title}</h2>
    <ul>
      {
        arr.map( (item, i) => {
          return (<li>{i} / { item }</li>)
        })
      }
    </ul>
    <hr/>
    <ul>
      {
        arr.map( item => {
          return <li key ={item.id}>{ item.id } / {item.name }</li>
        })
      }
      // 고유번호 - 객체, 키
    </ul>
    <hr />
    <ul>
      {
        data.map ( item => <li key={item.id}></li>)
      }
    </ul>
    </>
  );
};

export default Test1;