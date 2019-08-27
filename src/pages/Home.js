import React from "react";

import {Link} from "react-router-dom";

import "./styles/Home.css";

import logo from "../images/cowlist-logo.svg";
import platziconf from "../images/platziconf-logo.svg";
import vacagrande from "../images/vacagrande.svg"

class Home extends React.Component{
    render(){
        return (
            <div className="Home">
               <div className="container">
                 <div className="row">
                     
                     <div className="col-6">
                        <img 
                          alt="conf-logo" src={platziconf}
                        /> 
                        <h1 className="Home__badge">
                            Sistema de Control <br/> de Bovinos
                        </h1>
                        <Link to="/badges" className="btn btn-primary">
                          Empezar!
                        </Link>
                     </div>
                     <div className="col-6">
                        <img 
                        alt="astronauts" src={vacagrande}
                        />
                     </div>

                    
                 </div>
                
               </div>
            </div>
        )
    }
}

export default Home;