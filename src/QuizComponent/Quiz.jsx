import React, { useContext, useEffect, useState } from 'react'
import './Quiz.css'
import { Mycontext } from '../Context'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Quiz = () => {

    let[timer,setTimer]=useState(10)

    let navigate = useNavigate();

    useEffect(()=>{

        if (timer===0) {
            navigate("/Result")
            return;
        }

      let interval = setInterval(() => {
           setTimer(timer - 1) ;
        }, 1000);

        return()=>{
            clearInterval(interval)
        }
    },[timer])

let [data,setdata,index,setindex]=useContext(Mycontext);

let oneQuest=data[index];

function handleInput(eve) {

    oneQuest.yourAnswer = eve.target.value
    setdata([...data])
}

  return (
    <div className='quiz'>
        <header>
            <div>
                <h5>username</h5>
            </div>
            <div>
                <h5>{timer}</h5>
            </div>
        </header>
        <main>
            <div>{oneQuest.question}</div>
            <div>{
            oneQuest.options.map((e,i)=>{
                return <div key={i}>
                    <input type="radio" 
                    value={e} name='opt' 
                    onChange={handleInput} 
                    checked={oneQuest.yourAnswer == e ? true:false}
                    
                    />
                    <label htmlFor="">{e}</label>
                </div>
            })
            }</div>
            <div>
                {
                data.map((e,i)=>{
                return <button key={e.id} onClick={
                    ()=>{
                        setindex(i);
                    }
                }>{e.id}</button>
                })}
                </div>
        </main>
        <footer>
            <div>
                <button onClick={()=>{
                    if (index>0) {
                        setindex(index-1)
                    }
                }}
                >Previous Question</button>
                <button onClick={()=>{
                    if (index<data.length-1) {
                        setindex(index+1)
                    }
                    }}
                    >Next Question</button>
            </div>
            <div>

                <button onClick={()=>{
                    let confirmation=confirm("really want to submit")

                    if (confirmation) {
                        navigate("result")
                    }
                }}>
                Submit</button>
            </div>
        </footer>
    </div>
  )
}

export default Quiz