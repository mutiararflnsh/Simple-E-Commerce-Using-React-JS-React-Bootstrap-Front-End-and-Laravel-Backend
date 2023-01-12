import {Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Register(){

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/add")
        }
    },[])
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function signup(){
        let item={name, password, email};
        console.warn(item);
        let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "content-type":'application/json',
                "Accept":'application/json',

            },
        });
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
    }

    return(
    <>
      <Header />
        <div className="col-sm-4 offset-sm-4">
            <br/>
            <br/>
            <h1> Register</h1>
            <br/>
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)}
             className="form-control" placeholder="name"/>
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
             className="form-control" placeholder="password"/>
            <br/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
            className="form-control" placeholder="email"/>
            <br/>
            <Button onClick={signup} variant='dark'>Register</Button>
            
        </div>
    </>
    )
}
export default Register