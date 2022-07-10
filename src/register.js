import React, { useState } from 'react';
import Navbar from './navbar';
import {Link} from "react-router-dom"
import background from "./wallpaper1.jpeg"

function Register() {
    return ( 
      <div>
          <div style={{display:"flex"}}>
          <div style={{width:"50%"}}>
    <div style={{height:"50%",position:"absolute",width:"50%",backgroundSize:"cover",backgroundImage:`url(${background})`,
       backgroundRepeat:"no-repeat"}}>
      </div>           
      </div>
      <div >
           
      </div>
              <div style={{width:"50%"}}>
    <div style={{height:"50%",position:"absolute",top:"50%",width:"50%",backgroundSize:"cover",backgroundColor:`#CD5C5C`,
       backgroundRepeat:"no-repeat"}}>
      </div>           
      </div>
    </div>
      
            <div className='registerdiv' style={{position:"absolute",padding:"20px 30px",backgroundColor:"white",opacity:"0.9"}}>
                <h1 style={{color:"grey"}}>Sign Up </h1>
                <br/>
                <input style={{width:"100%",border:"none",fontSize:"15px",padding:"10px 0px",borderBottom:"0.5px solid grey"}} placeholder="Username"/>
                <br/><br/>
                <input style={{width:"100%",border:"none",fontSize:"15px",padding:"10px 0px",borderBottom:"0.5px solid grey"}} placeholder="Email"/>
                <br/><br/>
                <input style={{width:"100%",border:"none",fontSize:"15px",padding:"10px 0px",borderBottom:"0.5px solid grey"}} placeholder="Phone No"/>
                <br/><br/>
                <input style={{width:"100%",border:"none",fontSize:"15px",padding:"10px 0px",borderBottom:"0.5px solid grey"}} placeholder="Password"/>
               
               <br/><br/>
               <button style={{backgroundColor:"#CD5C5C", border:"none",fontSize:"15px",width:"100%",color:"white",padding:"10px 18px",borderRadius:"30px"}}>
                   CLICK TO REGISTER
                  </button>
                  <br/>
                  <br/>
                  <div style={{color:"grey",textAlign:'center',width:"100%"}}>
                 <small>Already a <span style={{fontWeight:"bold"}}>User?</span></small><br/>
                 <p>Click to <Link to={`/login`} style={{color:"#CD5C5C"}}> Login</Link></p>
                  </div>
            </div>
      </div> 
     );
}

export default Register;