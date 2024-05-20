import React from 'react'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { showToast } from '../assets/toasts';

export default function Resetpassword() {
     
  const emailRef = useRef(null);
  const navigator = useNavigate();

  function handlePasswordReset(e){
    e.preventDefault();

    const email = emailRef.current.value;

    if (email) {
      fetch("https://backend-project-1-mhlp.onrender.com/api/auth/forgetpassword",{
        method:"POST",
        headers:{
          "content-Type":"application/json",

        },
        body:JSON.stringify({
          email,
        }),
      })
        .then((response) => {
          if(response.status === 401) {
            alert("Account does not exist, create account");
            navigator("/signup");
          }
          return response.json();
        })
          .then((result) => {
            if(result.success && result.userId){
              navigator(`/newpassword?userId=${result.userId}`);
            }
          })
            .catch((error) => console.log(error));
    }else{
      alert("Email is required");
    }
  }
  return (
    <div className="container min-vh-100 d-flex justify-content-center text-start align-items-center">
    <div
      className="card p-0"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">
        <h3 className="mb-3">Reset Password</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            ref={emailRef}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handlePasswordReset}
          >Reset Password
          </button>
        </div>
      </div>
    </div>
  </div>
  );
   
}
