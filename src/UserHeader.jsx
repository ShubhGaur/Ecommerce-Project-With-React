import React from 'react'

function UserHeader() {
    console.log("!!!Jai Shree Ram!!!")
    const loggedIn = true;
    const userName = "Shubh"
  return (
    <>
    
    {!loggedIn ?
    <header>
        <a href="">Sign In/Guest</a> &nbsp;&nbsp;
        <a href="">Create Account</a>
    </header>
      :  
      <header>
        <span>Hello, {userName}</span>&nbsp;&nbsp;
        <span><button>LOGOUT</button></span>
    </header>}
    
    
    </>
    )
}

export default UserHeader