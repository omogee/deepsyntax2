import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"


function Navbar() {
    const [width, setwidth] = useState("")

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setwidth(window.innerWidth)
        })
    })
    const displaynav=(e)=>{
    let nav = document.querySelector(".navdiv_sm")
    if(nav.style.width === "60%"){
        e.target.style.opacity = "0"
        e.target.classList.add("fa-bars")
        e.target.classList.remove("fa-times")
        e.target.style.opacity = "1"
    }else{
        e.target.style.opacity = "0"
        e.target.classList.add("fa-times")
        e.target.classList.remove("fa-bars")
        e.target.style.opacity = "1"
    }
    nav.style.height = "100vh"
    nav.style.width = nav.style.width === "60%" ? "0%" : "60%"
    }
    return ( 
        <div style={{backgroundColor:"rgb(255,255,255,0.95)",position:"fixed",width:"100%",top:"0px",zIndex:"10"}}>
           
            <div className="navdiv">
                <div className='navbrand'>
                    <img style={{width:"100%",padding:"10px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`}></img>
                </div>
                <div className='navdivlist'>
                <Link style={{textDecoration:"none"}} to={`/`}><p style={{color:"grey"}}>Home</p></Link>
                </div>
                <div className='navdivlist'>
                    <p style={{color:"grey"}}>Service</p>
                </div>
                <div className='navdivlist'>
                    <p style={{color:"grey"}}>Contact</p>
                </div>
                <div className='navdivlist'>
                    <Link style={{textDecoration:"none"}} to={`/login`}><p style={{color:"grey"}}>Login/Register</p></Link>
                </div>
            <div className='bardiv' style={{display:"absolute", top:"5px",width:"50%", right:"0px",padding:"10px"}}>
                <span onClick={displaynav} className='fa fa-bars ' style={{float:"right",padding:"5px",cursor:"pointer",fontSize:"20px",border:"1px solid lightgrey"}}></span>
            </div>
            
            </div>
            <div className='navdiv_sm' >
             <div style={{padding:"20px"}}>
 <Link style={{textDecoration:"none"}} to={`/`}><p style={{color:"grey"}}>Home</p></Link>
                 <p>Service</p>
                 <p>Contact</p>
    <Link style={{textDecoration:"none"}} to={`/login`}><p style={{color:"grey"}}>Login/Register</p></Link>
             </div>
            </div>
        </div>
     );
}

export default Navbar;