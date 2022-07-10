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
    if(nav.style.height === "60vh"){
       setTimeout(()=>{
        e.target.classList.add("fa-bars")
        e.target.classList.remove("fa-times")
       },1000)
    }else{
      setTimeout(()=>{
        e.target.classList.add("fa-times")
        e.target.classList.remove("fa-bars")
      },1000)
    }
    nav.style.height = nav.style.height === "60vh" ? "0%" : "60vh"
    nav.style.width = nav.style.width === "100%" ? "0%" : "100%"
    nav.style.borderBottom = nav.style.borderBottom === "2px solid lightgrey" ? "" : "2px solid lightgrey"
    }
    return ( 
        <div style={{backgroundColor:"rgb(255,255,255,0.95)",position:"fixed",width:"100%",top:"0px",zIndex:"10"}}>
           
            <div className="navdiv" style={{textTransform:"uppercase"}}>
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
             <div style={{padding:"20px",textTransform:"uppercase"}}>
 <a style={{textDecoration:"none"}} href={`/`}><p style={{color:"black"}}>Home</p></a>
                 <p>Service</p>
                 <p>Contact</p>
    <a style={{textDecoration:"none"}} href={`/login`}><p style={{color:"black"}}>Login/Register</p></a>
             </div>
            </div>
        </div>
     );
}

export default Navbar;