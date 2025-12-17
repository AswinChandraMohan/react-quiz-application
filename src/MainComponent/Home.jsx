import React from 'react'
import './Home.css'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <nav>
            <div>
              <Link to={"/"}>
                <h1>Quiz App</h1>
              </Link>
            </div>
            {(
            <div>
               <Link to={"login"}>
                  <button>Login</button>
               </Link>
                <Link to={"signup"}>
                  <button>Signup</button>
                </Link>
            </div>
            )}
        </nav>
        <Outlet></Outlet>
    </div>
  )
}

export default Home