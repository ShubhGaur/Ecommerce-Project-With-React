import React from "react";

function UserHeader() {
  console.log("!!!Jai Shree Ram!!!");
  const loggedIn = false;
  const userName = "Shubh";
  return (
    <>
      {!loggedIn ? (
        <header>
          <a href="/signin">Sign In/Guest</a> &nbsp;&nbsp;
          <a href="/registration">Create Account</a>
        </header>
      ) : (
        <header>
          <span>Hello, {userName}</span>&nbsp;&nbsp;
          <span>
            <button>LOGOUT</button>
          </span>
        </header>
      )}
    </>
  );
}

export default UserHeader;
