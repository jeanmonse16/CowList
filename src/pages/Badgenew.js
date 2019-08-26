import React from "react";

import "./styles/Badgenew.css";
import logo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import Badgeform from "../components/Badgeform";
import api from "../api";
import PageLoading from "../components/PageLoading";

class Badgenew extends React.Component{

    state= { 
        loading: false,
        form:{
               nombre:"",
               peso:"",
               valor:"",
               edad:"",
               email: ""
             } 
    };
   

    handleChange = e => {
        this.setState({
            form:{
            ...this.state.form,
            [e.target.name]: e.target.value
            },
        })
    }

    handleClick = async e => {
        console.log("boton presionado")
        this.setState({
            loading: true, error: null
        })

        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})

            this.props.history.push("/badges")
        }
        catch(error){
            this.setState({
                loading:false, error: error
            })
        }
    }

    render()
    {
       if(this.state.loading){
           return <PageLoading />
       }

       return (
        <React.Fragment>
         
         <div className="BadgeNew__hero">
             <img className="BadgeNew__hero-image img-fluid" src={logo} alt="conflogo"></img>
         </div>
         
         <div className="container">
           <div className="row">
               <div className="col-6">
                     <Badge 
                     nombre={this.state.form.nombre || "Nombre"}  
                     peso={this.state.form.peso || "Peso"} 
                     valor={this.state.form.valor} 
                     edad={this.state.form.edad}
                     email={this.state.form.email || 'EMAIL'}
                     />
               </div>
               <div className="col-6">
                     <h1 className="">New Attendants</h1>
                     <Badgeform 
                     onChange={this.handleChange} 
                     formValues={this.state.form} 
                     onClick={this.handleClick}
                     error={this.state.error} />
               </div>
           </div>
         </div>

        </React.Fragment>
       )
    }
}

export default Badgenew;