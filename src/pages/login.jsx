import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef} from 'react';
import { useAuthContext } from '../Context/Authcontext';

export default function login() {
  const { setIsLoggedIn = () => {} } = useAuthContext();
  const navigator = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            try {
              if (result.token) {
                sessionStorage.setItem("_tk", result.token);
                setIsLoggedIn(true);
                navigator("/home");
              } else {
                throw new Error("Token missing!");
              }
            } catch (error) {
              console.log(error);
            }
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Email and Password is required to signin");
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
        <div className="mb-3">
        <label htmlFor="email" class="form-label">
          Email address
        </label>
        <input
         type="email" 
         class="form-control" 
         id="email" 
         placeholder="name@example.com"/>
         ref={emailRef}
        </div>
        <div className="mb-3">
        <label htmlFor="password" class="form-label">
          Password
        </label>
        <input
         type="password" 
         class="form-control" 
         id="password" 
         placeholder="**********"/>
         ref={passwordRef}
        </div>
        <div>
          <p className="text-center">
            Forgot password?
            <span className="mx-2">
              <Link to="/resetpassword">Reset password now</Link>
            </span>
          </p>
        </div>
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button"
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
  );
}
