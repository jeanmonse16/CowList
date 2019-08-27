import React from "react";

import {Link} from "react-router-dom";

import api from "../api";

import "./styles/Badges.css";

import Badgeslist from "../components/Badgeslist";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";


import loguito from "../images/badge-header.svg";

class Badges extends React.Component
{
    state= {
            loading: true,
            error: null,
            data: undefined
    }
    
    componentDidMount(){
       this.fetchData()

    }
    

    async fetchData(){
        this.setState({
            loading:true, 
            error: null
        })

        try{
           const data = await api.badges.list()
           this.setState({
               loading: false,
               data: data
           })
        }
        catch(error){
       
         this.setState({
             loading:false,
             error: error,
         })
        }
    }
   
    render()
    {
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />
        }


        return (
            <React.Fragment>
                

            <div className="Badges" >
               <div className="Badges__hero">
                   <div className="Badges__container" >
                       <img className="Badges_conf-logo" src={loguito} alt="logo de mierda"></img>
                   </div>
               </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">Nuevo animal</Link>
                </div>

               
            <Badgeslist badges={this.state.data} />
                
                

            </div>

        

            </React.Fragment>
        )
    }
}

export default Badges;