import React from 'react';
import { useRef } from 'react';
import { showToast } from '../assets/toasts';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phonenumberRef = useRef(null);
  const navigator = useNavigate();

  function handleSignup(e){
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const phonenumber = phonenumberRef.current.value;

    if(username.length > 0 && email.length > 0 && password.length > 0 && phonenumber.length > 0<=10 ){
      fetch("http://localhost:5000/api/auth/create",{
        method:"POST",
        body:JSON.stringify({
          username,
          email,
          password,
          phonenumber,
        }),
        headers:{
          "content-Type":"application/json",
        },
      })
        .then((response) =>{
          return response.json();
        })
          .then((result) =>{
            if (result.success){
              navigator("/login");
            }else{
              showToast(result.message);
            }
          })
            .catch((error) =>{
              showToast(error,"error");
            });
    }else{
      showToast("Please fill all the required fields");
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
        <h3 className="mb-3">Signup</h3>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">
          User name
        </label>
        <input
         type="text" 
         className="form-control" 
         id="name" 
         ref={usernameRef}
         placeholder="Eg: Joe Root"/>
        </div>
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
         id="password" 
         ref={passwordRef}
         placeholder="**********"/>
        </div>
        <div className="mb-3">
        <label htmlFor="phonenumber" className="form-label">
          Phone number
        </label>
        <input
         type="phonenumber" 
         className="form-control" 
         id="email" 
         ref={phonenumberRef}
         placeholder="Eg: +919875623415"/>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button"
        onClick={handleSignup}>
        signup
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}


