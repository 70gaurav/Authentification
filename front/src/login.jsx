import React, { useState } from 'react'

function Login() {
    const [email , setEmail] = useState("") 
    const [password , setPassword] = useState("") 

  return (
   <div className='wrapper'>
     <div className='main'>
        <form>
            <input type='text' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
            <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
            <button type='submit'>login</button>
        </form>
    </div>
   </div>
  )
}

export default Login