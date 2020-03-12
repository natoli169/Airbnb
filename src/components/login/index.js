import React, { useState } from "react";
import { Container } from "./style";
import login from "../../assets/login.jpg";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login Sub");
  };

  return (
    <Container>
      <div className='content'>
        <div className='main-form'>
          <h1 className='title'>Login</h1>
          <form onSubmit={onSubmit} className='form'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Username'
              required
            />
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='password'
              required
            />
            <input type='submit' value='Login' className='btn' />
          </form>
        </div>
      </div>
      <img src={login} alt='' className='log-img' />
    </Container>
  );
};
