import React, { useContext } from 'react'
import { Mycontext } from '../Context'
import "./Result.css"

const result = () => {

  let[data]=useContext(Mycontext);

  return (
    <div className='result'>
        {
          data.map((ele,i)=>{
            return (
              <div 
              key={i}
              className={
                ele.correctAnswer==ele.yourAnswer ? "correct" : "wrong"
                }>
                <p>{ele.question}</p>
                <div>
                    {ele.options.map((e)=>{
                      return(
                       <div>
                         <input type="radio"
                          value={e}
                           checked={ele.yourAnswer == e ? true : false}
                           disabled
                           />
                           <label htmlFor="">{e}</label>
                       </div>
                    )
                    })
                    }
                </div>
                <h4>Correct Answer: {ele.correctAnswer}</h4>
                <h3>Your Answer: {ele.yourAnswer}</h3>
              </div>
            )
          })
        }
    </div>
  )
}

export default result