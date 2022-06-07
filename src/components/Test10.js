import React, { useRef } from 'react';

const Test10 = () => {
  const colorRef = useRef(null)

  const onView = () => {
    const data = {
      color: colorRef.current.value
    }
    console.log(data)
  }
  return (
    <div>
      {/* 수업용 */}
      <select ref={colorRef}>
        <option value={"red"}>red</option>
        <option value={"green"}>green</option>
        <option value={"blue"}>blue</option>
        <option value={"orange"}>orange</option>
        <option value={"brown"}>brown</option>
      </select>
      <bottom onClick={onView}>확인</bottom>
    </div>
  );
};

export default Test10;