import React from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from '../assets/toasts';



export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigator = useNavigate();
  
  function handleLogin(e) {
    console.log("login");
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    if(email && password) {
      fetch("https://backend-project-1-mhlp.onrender.com/api/auth/login",{
        method:"POST",
        body:JSON.stringify({
          email,
          password,
        }),
        headers:{
          "content-Type": "application/json",
          "x-Token":sessionStorage.getItem("x-token"),
         

        },
      })
        .then((response) => {
          return response.json();
        })
         .then((result) => {
           if (result.success && result.token){
            sessionStorage.setItem("x-token", result.token);
            navigator("/home");
           }else{
            showToast(result.message);
           }
         })
           .catch((error) => {
            showToast(error,"error");
           });
    }else{
      showToast("Email or Password is required", "warning");
    }
  }
  return (
    <div className="container min-vh-100 d-flex justify-content-center text-start align-items-center">
      <div className="card p-0"
           style={{
           width:"350px",
          }}
        >
        <div className="card-body">
        <h3 className="mb-3">Login</h3>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
         type="email" 
         className="form-control" 
         id="email" 
         ref={emailRef} 
         placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
         type="password" 
         className="form-control"
         ref={passwordRef}  
         id="password" 
         placeholder="**********"/>
        </div>
        <div>
          <p className="text-center">
            Forgot password?
            <span className="mx-2">
              <Link to="/resetpassword">Reset password now</Link>
            </span>
          </p>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button"
        onClick={handleLogin}>
          login
        </button>
        </div>
        <div>
          <p className="text-center">
            Don't have an account?
            <span className="mx-2">
              <Link to="/signup">Sign up now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

