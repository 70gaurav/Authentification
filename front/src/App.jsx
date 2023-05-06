import React from 'react'
import Signup from './signup.jsx'
import Login from './login.jsx'
import Error from './error.jsx'
import {BrowserRouter , Routes , Route} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Error/ >}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App