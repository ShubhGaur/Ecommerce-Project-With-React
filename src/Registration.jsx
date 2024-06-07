import React from 'react'

function Registration() {
  return (
    <div>
        <h1>Register</h1>
        <label htmlFor='name'>Username</label>
        <input id='name' type ='text' placeholder='Enter Username'/>
        <label htmlFor='email'>Email</label>
        <input id='email' type ='email' placeholder='email@xyz.domain'/>
        <label htmlFor='pswd'>Password</label>
        <input type='password' id='pswd'/>
        <button type = 'submit'>Register</button>
        <p>Already a member?<span><a href=''>LOGIN</a></span></p>
    </div>
  )
}

export default Registration