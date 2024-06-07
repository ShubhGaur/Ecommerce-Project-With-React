import React, { useState } from "react";
import { useContext } from "react";
import { context } from "./Ecommerce";

function Registration() {
  const { userData } = useContext(context);
  const [user, setUser] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      name: fname,
      email: email,
      pswd: pswd,
    };
    userData.push(obj);
    localStorage.setItem(user, JSON.stringify(userData));

    // username = sg,  sg:  [{f:'sankalp',e:'e@gm.com',pswd:'12345'},{cartitem1:'xyz',cartitem2:'abc'}]
  }

  // function handleUserName(e){
  //   if()
  // }

  return (
    <div>
      <h1>Register</h1>
      <label htmlFor="uname">Username</label>
      <input
        id="uname"
        type="text"
        placeholder="Enter Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br></br>
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter Full Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <br></br>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="email@xyz.domain"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <label htmlFor="pswd">Password</label>
      <input
        type="password"
        id="pswd"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
      />
      <br></br>
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
      <p>
        Already a member?
        <span>
          <a href="/signin">LOGIN</a>
        </span>
      </p>
    </div>
  );
}

export default Registration;
