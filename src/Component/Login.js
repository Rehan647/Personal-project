import React, { useState } from 'react'

export default function Login(props) {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // setName();
        // setLogged(true);
        props.setUser(name);
        props.setLogged(true);
        setName("");
        setPassword("");
        
        
      };
      const handleLogout = () => {
        // Clear name and password and log out
        props.setUser('User');
        props.setLogged(false); // Update logged status
        setName("");
        setPassword("");
      };
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title text-center">Login</h5>
        <form onSubmit={handleSubmit}>
         
          {props.logged ? (
              // Show Logout button only when logged in
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              // Show Submit button if not logged in
             <>
             <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div> 
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button> </>
            )}
        </form>
      </div>
    </div>
  </div>
  )
}
