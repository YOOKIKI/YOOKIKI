import React from "react";

// export default function Login() {
//   return <div>Login</div>;
// }

// 혹은 const 함수 방법

const Login = () => {
  console.log(123);
  const name = "유키키";
  return (
    <div className="test">
      <div>
        <p style={{ color: "red", fontSize: "20px" }}>{name}</p>
      </div>
    </div>
  )
};

export default Login;