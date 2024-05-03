
import {  Routes, Route, } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Resetpassword from "./pages/resetpassword";
import Newpassword from "./pages/newpassword";
import Home from "./pages/home";
import Navbar from "./navbar/navbar";
import About from "./pages/about";
import Createrecipe from "./pages/createrecipe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home/>} path="/Home" />
        <Route element={<About/>} path="/About" />
        <Route element={<Createrecipe/>} path="/Createrecipe" />
        <Route element={<Login/>} path="/" />
        <Route element={<Signup/>} path="/Signup" />
        <Route element={<Resetpassword/>} path="/Resetpassword" />
        <Route element={<Newpassword/>} path="/Newpassword" />
      </Routes>
    </div>
  );
}

export default App;