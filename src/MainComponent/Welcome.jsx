import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Quiz from '../QuizComponent/Quiz'
import { Mycontext } from '../Context'
import "./Welcome.css"

const Welcome = () => {

let allValue =useContext(Mycontext)
let user=allValue[4];

  return (
    <div className='welcome'>
        <h1>{user && user.name}welcome to the Quiz app</h1>
       {user && (
        <Link to={"Quiz"}>
          <button>Start Quiz</button>
        </Link> 
      )}
    </div>
  )
}

export default Welcome