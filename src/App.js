import logo from './logo.svg';
import './App.css';
import background from "./wallpaper1.jpeg"
import background2 from "./wallpaper3.jpeg"
import background3 from "./wallpaper4.jpeg"
import Navbar from './navbar';
import {Link} from "react-router-dom"

function App() {
  document.title="Welcome! Hormel Home Page"
  return (
    <div>
      <div style={{width:"100%",height:"100%",position:"fixed",backgroundImage:`url(${background})`,
       backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      </div>
      <div  style={{position:"absolute", top:"0px", width:"100%"}}>
        <div  style={{marginTop:'20%',marginBottom:"10%",width:"70%",textAlign:"left",padding:"20px"}}>
      <h1 style={{color:"white",fontSize:"60px"}}>We Make Your Loved Ones Feel Right at Home</h1>
        </div>
           <div className='container'>
            <div className='row centerdiv' >
              <div style={{backgroundColor:"rgba(0,0,0,0.4)",height:"100%"}} className="col-12 col-sm-6" >
                <div style={{textAlign:"center", color:"white",justifyContent:"center",padding:"45px",height:"100%"}}>
                  <p style={{fontWeight:"bold",textAlign:"left",fontSize:"20px"}}>Welcome Dear User,</p>
                  <h2 style={{fontSize:"30px"}}>We are dedicated to making your loved one feel right at home!</h2>
                </div>
              </div>
              <div style={{backgroundColor:"#CD5C5C",opacity:"0.9",height:"100%"}} className="col-12 col-sm-6">
                <div style={{color:"white",justifyContent:"center",padding:"30px"}}>
                 <div style={{display:"flex"}}>
                   <div style={{width:"70%"}}>
                   <p style={{fontWeight:"bold",textAlign:"left",fontSize:"20px"}}> Contact Us <hr/></p>
                   <div style={{color:"white"}}>
                   <i><b>+234-81-693-194-76</b></i><br/><br/>
                   <i><b>+234-81-693-194-76</b></i><br/><br/>
                   <i><b>No 56 muritala mohammed way, oyingbo Yaba Lagos State.</b></i><br/>
                   </div>
                   </div>
                 </div>
                </div>
              </div>
            </div>
            </div>
        <div style={{backgroundColor:"white",padding:"0",margin:"0",marginBottom:"10%"}}>
        <div className='container'>
            <div className='row'>
            <div className="col-12 col-sm-6" style={{margin:"0",padding:"0"}}>        
              <img src={background3} style={{width:"100%",height:"35vh"}} className="img-responsive" />
              </div>
              <div className="col-12 col-sm-6" style={{margin:"0",padding:"0"}} >        
              <img src={background2} style={{width:"100%",height:"35vh"}} className="img-responsive" />
              </div>
            </div>
          </div>

        
           <div className='container'>
           <div className='row' >
              <div className='col-12 col-md-7'>
                <div style={{padding:"15px"}}>
                  <h1 style={{color:"#CD5C5C",fontSize:"50px"}}> Our Services </h1>
                  <button style={{backgroundColor:"#CD5C5C", border:"none",fontSize:"17px",color:"white",padding:"10px 18px",borderRadius:"3px"}}>
                     services -
                  </button>
                </div>
              </div>
              <div style={{backgroundColor:"pink",backgroundImage:`url(${background3})`,backgroundSize:"cover"}} className="col-xs-12 col-md-5">        
              </div>
            </div>

            <div className='row' style={{padding:"0",margin:"0",marginTop:"10%"}}>
              <div className='col-xs-12 col-md-4'>
                <div style={{padding:"30px"}}>
                  <h2 style={{color:"brown"}}>ASSISTANT LIVING</h2>
                  <p style={{color:"grey",fontSize:"18px"}} >Assistance with bathing, grooming, and other personal needs including daily laundry and housekeeping.</p>
                </div>
              </div>
              <div className='col-xs-12 col-md-4'>
                <div style={{padding:"30px"}}>
                  <h2 style={{color:"brown"}}>NUTRITION & COMMUNICATION</h2>
                  <p style={{color:"grey",fontSize:"18px"}}>Nutritious home cooked meals and snacks with emphasis on hydration. Daily personal interaction to promote mindful thought.</p>
                </div>
              </div>
              <div className='col-xs-12 col-md-4'>
                <div style={{padding:"30px"}}>
                  <h2 style={{color:"brown"}}>PHARMACY SUPPORT</h2>
                  <p style={{color:"grey",fontSize:"18px"}}>Medication and incontinence management Lensed Vocational Nurse available</p>
                </div>
              </div>
              </div>
                  <hr/>   
           
 
             <div className='row'>
               <div className='col-12 col-md-2'>
                 <img  style={{border:"10px solid #CD5C5C",borderRadius:"50%",width:"100%"}} src={`https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png`}/>
               </div>
               <div className='col-12 col-md-10'>
               <div style={{padding:"20px  50px"}}>
                  <h2 style={{color:"brown"}}>HAPPY CLIENT <span style={{color:"lightgrey"}}>===</span> HAPPY BUSINESS</h2>
                  <p style={{color:"grey",fontSize:"18px"}}> We also Provide essential aftersales service to ensure our clients are happy and satisfied. </p>
                  <b>Our service numbers are always available for a speedy dial!</b>
                </div>
               </div>
             </div>

            <div style={{width:"100%",marginTop:"10%"}}>
            <hr/>
            <div className='row'>
               <div className='col-12 col-md-2'>
                 <img  style={{width:"100%",border:"10px solid #CD5C5C",borderRadius:"50%"}} src={`https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png`}/>
               </div>
               <div className='col-12 col-md-10'>
               <div style={{padding:"20px  50px"}}>
                  <h2 style={{color:"brown"}}>HAPPY CLIENT <span style={{color:"lightgrey"}}>===</span> HAPPY BUSINESS</h2>
                  <p style={{color:"grey",fontSize:"18px"}}> We also Provide essential aftersales service to ensure our clients are happy and satisfied. </p>
                  <b>Our service numbers are always available for a speedy dial!</b>
                </div>
               </div>
             </div>
            </div>

           
            <hr/>
         
           </div>
     
        </div>
        <div className='row' style={{margin:"0",padding:"30px",backgroundColor:"#FF6347",backgroundColor:"indianred"}}>
          <div className="col-xs-12 col-md-6 ">
          <div style={{display:'flex',padding:"2px",marginBottom:"20px"}}>
          <div  style={{width:"50%",margin:"0",color:"white"}}>
             <p style={{fontWeight:"bold",textTransform:"uppercase"}}>About HORMEL</p>
               <p>About Us</p>
               <p>Reviews</p>
               <p>Meet Our Team</p>
               <p>Sell Your Product</p>
               <p>Rate Us</p>
               <p>PLace Order Offline</p>
               <p>FAQ</p>
               <p>Blogs</p>
            </div>
            <div  style={{width:"50%",color:"white"}}>
             <p style={{fontWeight:"bold",textTransform:'uppercase'}}>Our Locations <span style={{color:"lightblue"}} className='fa fa-globe fa-2x'></span></p>
               <p>Lagos Island, Lagos State</p>
               <p>Lagos Mainland, Lagos State</p>
               <p>Shagamu, Ogun State</p>
               <p>Rumuomasi, Rivers State</p>
               <p>Ore, Oyo State</p>
               <p>Minna, Niger State</p>
               <p>Abakaliki, Ebonyi State</p>
               <p>Oba, Anambra State</p>
               <p>Up Iweka, Anambra State</p>
             <p></p>  
            </div>
            </div>
            </div>
          <div className='col-xs-12 col-md-6'>
            
            <input placeholder="Enter Name"  type="text" style={{width:"100%",borderRadius:"5px",border:"none",padding:"10px"}} />
            <br/>
            <br/>
            <input placeholder="Enter Email"  type="text" style={{width:"100%",borderRadius:"5px",border:"none",padding:"10px"}} />
            <br/>
            <br/>
            <input placeholder="Enter Region"  type="text" style={{width:"100%",borderRadius:"5px",border:"none",padding:"10px"}} />
            <br/>
            <br/>
            <input placeholder="+234 - contact"  type="text" style={{width:"100%",borderRadius:"5px",border:"none",padding:"10px"}} />
            <br/>
            <br/>
            <textarea col={5} rows={5} placeholder="Enter Your Complaint/ Request..." style={{width:"100%"}}/>
            <br/>
            <br/>
            <button style={{backgroundColor:"#CD5C5C", border:"none",fontSize:"17px",color:"white",padding:"10px 18px",borderRadius:"3px"}}>
                    Submit
                  </button>
          </div>
        
          

        </div>
      </div>
    </div>
  );
}

export default App;
