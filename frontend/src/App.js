import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarBootstrap from "./components/Navbar/navbar.js";
import axios from "axios";
import "./App.css";
import Home from "./components/Home/home.js";
import Register from "./components/Register/register.js";
import Login from "./components/Login/login.js";


function App() {
  return (
    <div className="app">
      <NavbarBootstrap />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
