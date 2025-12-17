import React, { useState } from 'react'
import Router from './Router'
import { createContext } from 'react'
import Storage from './QuizComponent/Storage.json'

export let Mycontext=createContext(Storage);


const Context = () => {

let[data,setdata]=useState(Storage);
let[index,setindex]=useState(0);

let[user,setuser]=useState();

  return (
    <div>
        <Mycontext.Provider value={[data,setdata,index,setindex,user,setuser]}>
            <Router></Router>
        </Mycontext.Provider>
    </div>
  )
}

export default Context