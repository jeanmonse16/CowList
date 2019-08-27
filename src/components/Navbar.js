import React from "react";
import "./styles/Navbar.css";
import vacalogo from "../images/logovaca.svg"

class Navbar extends React.Component{
    render()
    {
       return (
        <div className="Navbar">

            <div className="container-fluid">
             <a className="Navbar__brand" href="/">
               <img  className="Navbar__brand-logo" src={vacalogo} alt="logo"></img>
               <span className="font-weight-light" >Cow</span>
               <span className="font-weight-bold" >List</span> 
             </a>
            </div>
          
        </div>


       )
    }
}

export default Navbar;