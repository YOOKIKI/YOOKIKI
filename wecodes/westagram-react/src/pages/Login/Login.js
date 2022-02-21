import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss"
import Button from "./Button/Button";
// import IdInput from "./Input/InputId";
// import PwIput from "./Input/InputPw";




function Login() {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [isLoginOn, setLoginOn] = useState(false);

  const navigate = useNavigate();

  // const [color, setColor] = useState("#0095f6");
  // const IdInput = useState();
  // const PwIput = useState();

  const goToMain = () => {
    console.log('go to main');
    navigate("/Main");
  };

  const handleIdInput = (e) => {
    console.log(e.target.value);

    setIdInput(e.target.value);
  };

  const handlePwInput = (e) => {
    console.log(e.target.value);
    setPwInput(e.target.value);
  };

  // const idInput = value => {
  //   return value.includes('@')
  // }


  const loginOn = idInput.includes("@") && pwInput.length >= 5

  // const isLogin = () => {
  //   return idInput.includes("@") && pwInput.length >= 5
  //     ? setLoginOn(true)
  //     : setLoginOn(false);
  // }

  // const 변수 = idValue.length > 0 && pwInput.length > 0 

  // const onChangeBtn = () => {
  // setColor("#b9def7");
  // };

  return (
    <>
      <section>
        <article>
          <div className="loginBox">
            <h1 className="logo">Westagram</h1>
            <div>
              <form className="loginForm">
                {/* <IdInput onChange={handleIdInput} />
                <PwIput onChange={handleIdInput} /> */}
                <input
                  type="text"
                  id="idInput"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={handleIdInput} />
                <input
                  type="password"
                  id="pwInput"
                  placeholder="password"
                  value={pwInput}
                  onChange={handlePwInput} />
              </form>
              {/* <Button onClick={goToMain} onChange={onChangeBtn} color={color} /> */}
              <Button
                onclick={goToMain}
                className={loginOn ? 'activeBtn' : 'unActiveBtn'}
              // disabled={idInput === '' || pwInput === '' ? true : false}
              />
              <a className="forgotPwd">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </article>
      </section>
    </>
  )
};

export default Login;