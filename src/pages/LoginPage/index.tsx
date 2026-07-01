import React, { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}
const LoginPage = () => {
  const [loginUser, setLoginUser] = useState<LoginForm>({
    email: "",
    password: "",
  });
  return;
  <form action="">
    <label htmlFor="email"></label>
    <input type="email" name="" id="" />
    <label htmlFor="passwor"></label>
    <input type="password" name="" id="" />
  </form>;
};

export default LoginPage;
