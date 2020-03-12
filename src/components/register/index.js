import React, { useState } from "react";
import { Container } from "./style";
import signup from "../../assets/signup.jpg";
import AuthContext from "../../context/auth/authContext";

export const Register = () => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      console.log("hello");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("savkjda");
    } else {
      console.log("Register Sub");
    }
  };

  return (
    <Container>
      <div className='content'>
        <div className='main-form'>
          <h1 className='title'>Signup</h1>
          <form onSubmit={onSubmit} className='form'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Name'
              required
            />
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
              required
            />
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Password'
              required
              minLength='6'
            />
            <input
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm password'
              required
              minLength='6'
            />
            <input type='submit' value='Signup' className='btn' />
          </form>
        </div>
      </div>
      <img src={signup} alt='' className='log-img' />
    </Container>
  );
};
