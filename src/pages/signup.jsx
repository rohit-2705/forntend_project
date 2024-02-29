import React from 'react'

export default function signup() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center text-start align-items-center">
      <div className="card p-0"
           style={{
           width:"350px",
          }}
        >
        <div className="card-body">
        <div className="mb-3">
        <label htmlFor="name" class="form-label">
          User name
        </label>
        <input
         type="text" 
         class="form-control" 
         id="name" 
         placeholder="Eg: Joe Root"/>
        </div>
        <div className="mb-3">
        <label htmlFor="email" class="form-label">
          Email address
        </label>
        <input
         type="email" 
         class="form-control" 
         id="email" 
         placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label htmlFor="phonenumber" class="form-label">
          Phone number
        </label>
        <input
         type="phonenumber" 
         class="form-control" 
         id="email" 
         placeholder="Eg: +919875623415"/>
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
        </div>
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">
          signup
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}


