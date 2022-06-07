import React from 'react';
import Test13 from './components/Test13'
import Busniess from './sample/Busniess';


const App = () => {
  return (
    <div>
      <Test13 />
      {/* <Busniess /> */}
    </div>
  );
};

export default App;

/*
Array.prototype.map()
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

구문
arr.map(callback(currentValue[, index[, array]])[, thisArg])
arr.map (  함수  (    현재값, 인덱스)
arr.map ( function( item, index) {
  return 반환 값 () , {}
})
arr.map ( (item, index) => {
  return 반환 값 () , {}
})
arr.map ( (item, index) => { 

매개변수
callback
새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.
currentValue
처리할 현재 요소.
index Optional
처리할 현재 요소의 인덱스.
array Optional
map()을 호출한 배열.
thisArg Optional
callback을 실행할 때 this로 사용되는 값.
반환 값
배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.
*/