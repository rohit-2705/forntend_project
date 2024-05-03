import React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { showToast } from '../assets/toasts';
import { useRef } from 'react';

export default function Newpassword() {
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);
  const navigator = useNavigate();
  const [searchQuery] = useSearchParams();

  
  function handleNewpassword(e) {
    e.preventDefault();
    const newPass = newPassword.current.value;
    const confirmPass = confirmPassword.current.value;
    if (
      newPass &&
      confirmPass &&
      newPass === confirmPass &&
      searchQuery.get("userId")
    ) {
      fetch("http://localhost:5000/api/auth/newpassword",searchQuery.get("userId"),
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: newPass,
          }),
        }
      )
        .then((response) => {
          if (response.status === 200) {
            navigator("/login");
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Password is invalid");
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
          <h3 className="mb-3">Create New Password</h3>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              ref={newPassword}
              placeholder="*********"
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              ref={confirmPassword}
              placeholder="*********"
             
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleNewpassword}
            >
              Update NewPassword
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
