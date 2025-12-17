import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../Context';
import "./Login.css"

const Login = () => {

let allValue =useContext(Mycontext)

let user=allValue[4];
let setuser=allValue[5];

console.log(user , setuser);

let navigate = useNavigate()

let [loginState,setLogin]=useState({
  email:"",
  password:""
});

async function handleSubmit(e){
  e.preventDefault()

  let res= await fetch(
    `https://690ed23fbd0fefc30a05918f.mockapi.io/API/user?email=${loginState.email}&password=${loginState.password}`
  )

  let oneUser=await res.json();

  console.log(typeof oneUser);

  if (typeof oneUser =="object") {
    
    setuser(oneUser)
    navigate("/")
  }

  console.log(oneUser);
}

function handleInput(e) {
  setLogin({...loginState,[e.target.name]:e.target.value})
}

  return (
    <div className='login'>
         <form action="">
            <h2>Login</h2>
            <input type="email" 
            name='email'
            placeholder='Enter your mailid'
            value={loginState.email}
            onInput={handleInput}
            />
            <input type="password"
            name='password' 
            placeholder='Enter your password'
            value={loginState.password}
            onInput={handleInput}
            />
            <input type="submit" disabled={loginState.email && loginState.password ? false : true}
            onClick={handleSubmit}
            />
        </form>
    </div>
  )
}

export default Login