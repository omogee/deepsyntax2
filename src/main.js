import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import App from './App';
import Login from './login';
import Navbar from './navbar';
import Register from './register';

function Main() {
    return ( 
        <Router>
        <Routes>   
            <Route path="/"  element={<><Navbar /><App /></>}/>
        <Route path="/login"  element={<><Navbar /><Login /></>}/>
        <Route path="/register" element={<><Navbar /><Register/></>} />
        </Routes>
     </Router>
     );
}

export default Main;