import React from "react";

function SignIn() {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="email@xyz.domain" />
      <label htmlFor="pswd">Password</label>
      <input type="password" id="pswd" />
      <button type="submit">LOGIN</button>
      <button type="button">Guest User</button>
      <p>
        Not a member yet?{" "}
        <span>
          <a href="/registration">Register</a>
        </span>
      </p>
    </div>
  );
}

export default SignIn;
