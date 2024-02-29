import React from 'react'
import { Link } from 'react-router-dom'

export default function resetpassword() {
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
           //ref={emailRef}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            //onClick={handlePasswordReset}
          >Reset Password
          </button>
        </div>
      </div>
    </div>
  </div>
  );
   
}
