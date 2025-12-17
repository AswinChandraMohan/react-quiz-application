import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './MainComponent/Home'
import Welcome from './MainComponent/Welcome'
import Signup from './MainComponent/Signup'
import Login from './MainComponent/Login'
import Quiz from './QuizComponent/Quiz'
import Result from './QuizComponent/Result'


let router=createBrowserRouter([
  { path: "/",
    element: <Home></Home>,
    children:[
      {
        // path: "/home",
        index:true,
        element: <Welcome></Welcome>
      },
      {
      path:"Signup",
      element:<Signup></Signup>
    },
    {
      path:"Login",
      element:<Login></Login>
    }
    ]
  },
  {
    path:"Quiz",
    element:<Quiz></Quiz>
  },
  {
    path:"/Result",
    element:<Result></Result>
  }
])

const Router = () => {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Router