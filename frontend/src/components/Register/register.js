// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   function handlename(e) {
//     setName(e.target.value);
//     console.log(name);
//   }
//   function handleage(e) {
//     setAge(e.target.value);
//   }
//   function handleemail(e) {
//     setEmail(e.target.value);
//   }
//   function handlepassword(e) {
//     setPassword(e.target.value);
//   }
//   function handlerole(e) {
//     setRole(e.target.value);
//   }

//   const data = {
//     name: name,
//     age: age,
//     email: email,
//     password:password,
//     Role:role
//   };

//   function sendData(e){
//     e.preventDefault();
//     axios.post("http://localhost:3001/register",data).then((res)=>{
//         console.log(res);
//         if(res.status==200){
//             alert(res.data.message)
//         }
//     }).catch((err)=>{

//     })
//   }

//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Enter your name</Form.Label>
//         <Form.Control type="text" placeholder="Name" onChange={handlename} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicAge">
//         <Form.Label>Enter your age</Form.Label>
//         <Form.Control type="text" placeholder="Age" onChange={handleage} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           onChange={handleemail}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           onChange={handlepassword}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicRole">
//         <Form.Label>Enter your role</Form.Label>
//         <Form.Control type="text" placeholder="Role" onChange={handlerole} />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={sendData}>
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Register;

// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pitcherlogo from "../../assets/pitcherslogo.png";
import LoginImage from "../../assets/loginimage.png";
import "./register.css";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handlename(e) {
    setName(e.target.value);
    console.log(name);
  }
  function handleage(e) {
    setAge(e.target.value);
  }
  function handleemail(e) {
    setEmail(e.target.value);
  }
  function handlepassword(e) {
    setPassword(e.target.value);
  }
  function handlerole(e) {
    setRole(e.target.value);
  }

  const data = {
    name: name,
    age: age,
    email: email,
    password: password,
    Role: role,
  };

  function sendData(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", data)
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
        <h1 className="heading text">Lets Register Account</h1>
        <h3 className="paragraph text">Hello user,you have</h3>
        <h3 className="paragraph text"> a greatful journey</h3>
        <Form className="form">
          <Form.Group className="mb-3 formInput" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={handlename}
            />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicAge">
            <Form.Control type="text" placeholder="Age" onChange={handleage} />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleemail}
            />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlepassword}
            />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicRole">
            <Form.Control
              type="text"
              placeholder="Role"
              onChange={handlerole}
            />
          </Form.Group>
          <button className="signIn" type="submit" onClick={sendData}>
            Register
          </button>
          <div className="signInFooter">
            <h6>Already have an account?</h6>
            <Link to={"/login"} className="registerLink">
              <h6>
                <b>Login</b>
              </h6>
            </Link>
          </div>
        </Form>
      </div>
      <img src={LoginImage} />
    </div>
  );
}

export default Register;
