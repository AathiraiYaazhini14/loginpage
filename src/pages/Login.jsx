import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const correctUsername= "aathi";
        const correctPassword= "12345";
        if(username==correctUsername && password==correctPassword){
            setError('');
            navigate('/marks');
        }
        else{
            setError("INCORRECT USERNAME OR PASSWORD");
        }
    };
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label className="username">UserName</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <label className="password">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            <div className='but'><button>Submit</button></div>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login
