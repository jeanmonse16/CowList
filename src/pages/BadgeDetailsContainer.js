import React from "react";

import api from "../api.js"
import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"

import BadgeDetails from"./BadgeDetails"


class BadgeDetailsContainer extends React.Component{

 state = {
     loading: true,
     error: null,
     data: undefined,
     modalIsOpen: false
 }

 componentDidMount(){
     this.fetchData()
 }
 
 fetchData = async e => {
     this.setState({loading: true, error: null})

     try{
         const data = await api.badges.read(this.props.match.params.badgeId)
         this.setState({
             loading: false, data
         })
     }
     catch(error){
        this.setState({
            loading: false, error
        })
     }
 }

 handleOpenModal = e => {
     this.setState({
         modalIsOpen:true
     })
 }

 handleCloseModal = e => {
     this.setState({
         modalIsOpen: false
     })
 }

 handleDeleteBadge = async e => {
    console.log("badge borrado")
    this.setState({
        loading: true, error: null
    })

    try{
        await api.badges.remove(this.props.match.params.badgeId )
        this.setState({loading: false})
        this.props.history.push("/badges")
    }
    catch(error){
        this.setState({
            loading:false, error: error
        })
    }

}

 render(){
     if(this.state.loading){
         return <PageLoading />
     }
     if(this.state.error){
         return <PageError error={this.state.error}/>
     }

     
     return (
         <BadgeDetails badge={this.state.data} 
         onCloseModal={this.handleCloseModal} 
         onOpenModal={this.handleOpenModal} 
         isOpen={this.state.modalIsOpen} 
         onDeleteBadge={this.handleDeleteBadge} />
     )
 }
}

export default BadgeDetailsContainer;