import React, { useState } from 'react'
import { Await, useNavigate } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {

let navigate=useNavigate()

let[signupState,setSignupState]=useState({
  name:"",
  email:"",
  password:"",
  Quiz:null
});

function handleInput(eve) {
  setSignupState({...signupState,[eve.target.name]:eve.target.value})
}
async function handleSubmit(eve){
  eve.preventDefault();

    let res = await fetch(
    "https://690ed23fbd0fefc30a05918f.mockapi.io/API/user",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(signupState),
  }
)

let userResult=await res.json();

setSignupState({
  name:"",
  email:"",
  password:"",
  Quiz:null
})

if (typeof userResult=="object") {
  navigate("/login")
}

}

  return (
    <div className='signup'>
        <form action="" >
            <h2>Signup</h2>
            <input type="text" 
            placeholder='Enter your username' 
            name='name'
            onInput={handleInput} 
            />
            <input type="email" 
            placeholder='Enter your mailid' 
            name='email'
            onInput={handleInput} 
            />
            <input type="password" 
            placeholder='Enter yoiur password' 
            name='password'
            onInput={handleInput} 
            />
            <input type="submit" disabled={signupState.name && signupState.email && signupState.password ? false : true}
            onClick={handleSubmit}
            />
        </form>
    </div>
  )
}

export default Signup