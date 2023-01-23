// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import Pitcherlogo from '../../assets/pitcherslogo.png';
import LoginImage from '../../assets/loginimage.png';
import './login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleemail(e) {
    setEmail(e.target.value);
  }
  function handlepassword(e) {
    setPassword(e.target.value);
  }

  const data = {
    email: email,
    password: password,
  };

  function sendData(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", data)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert(res.data.message);
        }
      })
      .catch((err) => {});
  }

  return (
    <div className="loginPage">
      <div className="login">
        <img src={Pitcherlogo} className="logo" />
        <h1 className="heading text">Lets Sign you in</h1>
        <h3 className="paragraph text">Welcome Back,</h3>
        <h3 className="paragraph text"> You have been missed</h3>
        <Form className="form">
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={handleemail}
            />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={handlepassword}
            />
          </Form.Group>
          <button className="signIn" type="submit" onClick={sendData}>
            Sign in
          </button>
          <div className="signInFooter">
            <h6>Don’t have an account ? </h6>
            <Link to={"/register"} className="registerLink">
              <h6>
                <b>Register Now</b>
              </h6>
            </Link>
          </div>
        </Form>
      </div>
      <img src={LoginImage} />
    </div>
  );
}

export default Login;
