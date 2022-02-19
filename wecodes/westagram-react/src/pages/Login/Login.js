import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

// export default function Login() {
//   return <div>Login</div>;
// }

// 혹은 const 함수 방법


function Login() {
  const input = useState();
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/Main");
  };

  const hadleIdInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <section>
        <article>
          <div className="loginBox">
            <h1 className="logo">Westagram</h1>
            <div>
              <form className="loginForm">
                <input type="text" id="idInput" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={hadleIdInput} />
                <input type="password" id="pwInput" placeholder="비밀번호" onChange={hadleIdInput} />
              </form>
              <button id="loginClick" className="loginButton" onClick={goToMain}>로그인</button>
              <a className="forgotPwd">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </article>
      </section>
    </>
  )
};

export default Login;