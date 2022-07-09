import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import background from "./wallpaper3.jpeg"

function Login() {
    return ( 
        <div>
       <div style={{width:"100%",height:"100%",backgroundSize:"contain",position:"fixed",backgroundImage:`url(${background})`,
       backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      </div>
   
            <div className='logindiv' style={{position:"absolute",padding:"20px 30px",backgroundColor:"white"}}>
                <h1 style={{textAlign:"center",color:"grey"}}>Login</h1>
                <br/>
                <input style={{width:"100%",border:"none",fontSize:"17px",padding:"10px 0px",borderBottom:"0.5px solid grey"}} placeholder="Username"/>
                <br/><br/>
                <input style={{width:"100%",border:"none",fontSize:"17px",padding:"10px 0px",borderBottom:"0.5px solid grey"}} placeholder="Password"/>
               <br/><br/>
               <small style={{float:"right",color:"grey"}}>Forgot Password ?</small>
               <br/><br/>
               <button style={{backgroundColor:"#CD5C5C", border:"none",fontSize:"15px",width:"100%",color:"white",padding:"10px 18px",borderRadius:"30px"}}>
                    LOGIN
                  </button>
                  <br/><br/><br/>
                  <div style={{color:"grey",textAlign:'center',width:"100%"}}>
                 <small>Not a <span style={{fontWeight:"bold"}}>User?</span></small><br/>
                 <p>Click to <Link to={`/register`} style={{color:"#CD5C5C"}}> Sign up</Link></p>
                  </div>
            </div>
        </div>
     );
}

export default Login;