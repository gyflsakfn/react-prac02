import React, { useState } from 'react';
import './style.css'
import '../assets/css/reset.css'
import BusniessList from './BusniessList';
import dataList from '../assets/api/busniessData'

const Busniess = () => {
  const [ data, setData ] = useState( dataList )

  return (
    <>
      <section className="business">
        <div className="inner">
            <h2>BUSINESS</h2>
            <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

            <BusniessList data = {data} />

            <p className="more"><a href="#">View More</a></p>
        </div>
    </section>
    </>
  );
};

export default Busniess;