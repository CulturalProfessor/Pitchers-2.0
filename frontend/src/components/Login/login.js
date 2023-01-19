import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleemail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handlepassword}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={sendData}>
        Login
      </Button>
    </Form>
  );
}

export default Login;
