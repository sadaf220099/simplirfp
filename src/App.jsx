import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Blogs from './pages/Blogs'
const router =createBrowserRouter (
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/Blogs",
      element:<Blogs/>
    }
  ]
)




const App =() => {
  

  return (
   

    <RouterProvider router={router}/>
  )
}

export default App
