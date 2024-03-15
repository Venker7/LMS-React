import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';


const Login = () => {
 const [data,setData]=useState({email:"",libraryID:""});
 const [datas,setDatas]=useState([]);
function handleSubmit(e){
    e.preventDefault()
    setDatas([...datas,data.email,data.libraryID]);
}

    return (
        <div className="form-container">
            <h2>Login</h2>
            {console.log(data)}
            {console.log(datas)}
            <form>
               <div className="email">
                <lable>Email:</lable>
                <input type="email"  onChange={(e)=>setData({...data,email:e.target.value})}placeholder='Enter MTU email' value={data.email}/>
               </div>
               <div className='libraryID'>
                <lable>Library ID:</lable>
                <input  type="text" onChange={(e)=>setData({...data,libraryID:e.target.value})}placeholder='Enter Library ID'value={data.libraryID}/>
               </div>
               <button className='login' onClick={handleSubmit}>Login</button>
            </form>
            <p>Don't have an account?  <a>Register</a></p>
            
        </div>
    );
}

export default Login;
