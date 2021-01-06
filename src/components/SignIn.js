import React from "react";
import { Link } from "react-router-dom"



function SignIn() {
  return (
    <div>
      {/* this is the sign-in form */}
      <div className="form-body">
        <form action="">
          <div className="username-div">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              placeholder="username or email"
              name="username"
            />
          </div>
          <div className="password-div">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
        </form>
        <div className="question">
          <div className="forgot">Forgot your password ?</div>
          <Link to="/signup">
            <div className="new-account">Create New Account</div>
          </Link>
        </div>
        <div className="external">
          <div className="google">Login with Google</div>
          <div className="facebook">Login with facebook</div>
          <div className="gmail">Login with Gmail</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
