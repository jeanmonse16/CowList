import React from "react";
import "./styles/Badge.css";
import Conflogo from "../images/descarga.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component{
  render() {
     return <div className="Badge">
       <div className="Badge__header">
           <img src={Conflogo} alt="logo principal"></img>
       </div>

       <div className="Badge__section-name">
           <Gravatar className="Badge__avatar" email={this.props.email}  />
           <h1>{this.props.nombre} </h1>
       </div>
       
       <div className="Badge__section-info ">
         <h5>  {this.props.peso} kg</h5>
         <p>Valor: {this.props.valor} $</p><br></br>
         <p>Edad: {this.props.edad} </p>  
       </div>
       
       <div className="Badge__footer">
          #platziconf
       </div>
       
       </div>
     }
}

export default Badge;
