import Header from './Header';
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/add")
        }
    },[])

    async function login(){
        console.warn(email,password)
        let item={email,password};
        let result =  await fetch("http://localhost:8000/api/login",{
            method:'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }

    return(
        <div>
            <Header />
            <br/>
            <br/>
            <h1>Login</h1>
            <br/>
            <div className="col-sm-4 offset-sm-4">
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} 
            className="form-control" />
            <br/>
            <input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)}
            className="form-control" />
            <br/>
            <Button variant='dark' onClick={login}>Login</Button>

            </div>
        </div>
    )
}
export default Login