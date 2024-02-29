import React from 'react'

export default function newpassword() {
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
              placeholder="*********"
              //ref={newPassword}
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
              placeholder="*********"
              //ref={confirmPassword}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              //onClick={handleUpdateUser}
            >
              Update NewPassword
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
