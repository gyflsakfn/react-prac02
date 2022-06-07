import React, { useRef } from 'react';

const Test9 = () => {
  const idRef = useRef(null)
  const pwRef = useRef()

  const onShow = () => {
    const data = {
      id: idRef.current.value,
      pw: pwRef.current.value
    }
    console.log(data)
  }
  return (
    <div>
      {/* ref 수업용 : 좋은 예는 아님 */}
      <input type="text" ref={idRef} />
      <input type="text" ref={pwRef} />
      <button onClick={onShow}>확인</button>
    </div>
  );
};

export default Test9;

