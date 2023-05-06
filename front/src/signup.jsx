import { useState } from 'react'
import axios from "axios"



function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(name, email, password)
    function submithandler() {
        axios.post("/adduser", {
            name: name,
            email: email,
            password: password
        })
    }

    return (
        <div className='wrapper'>
            <div className='main'>
                <form onSubmit={(e) => { e.preventDefault(); submithandler() }}>
                    <input type='text' placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)}></input><br />
                    <input type='email' placeholder='enter your e-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
                    <input type='password' placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br />
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
