import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Protected(props){
    const navigate = useNavigate();
    let Cmp=props.Cmp
    useEffect(()=>{
        if ( !localStorage.getItem('user-info')){
            navigate("/register")
        }
    },[]);

    return(
        <div>
            <Cmp />
        </div>
    )
}
export default Protected