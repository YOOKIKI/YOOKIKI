import React, { useState } from "react";

function Input(props) {
  const [color, setColor] = useState("#0095f6");

  const onChangeBtn = () => {
    setColor("#b9def7");

  };

  return (
    <>
      <input type="text" id="idInput" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={onChangeBtn} />
      <input type="password" id="pwInput" placeholder="비밀번호" onChange={onChangeBtn} />
    </>

  )
}

export default Input;