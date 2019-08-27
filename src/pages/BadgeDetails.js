import React from "react"

import {Link} from "react-router-dom"

import "./styles/BadgeDetails.css";
import platziconf from "../images/platziconf-logo.svg";

import Badge from "../components/Badge"
import DeleteBadgeModal from "../components/DeleteBadgeModal"

function BadgeDetails (props){

    const badge = props.badge
 
    return (
        <div>
            <div className="BadgeDetails__hero">

               <div className="container">
                 <div className="row">
                   <div className="col-6">
                      <img src={platziconf} alt="logo de la conferencia" />
                   </div>
                   <div className="col-6 BadgeDetails__hero-attendant-name">
                      <h1>
                          {badge.firstName} {badge.lastName}
                      </h1>
                   </div>
                 </div>
               </div>

            </div>
            <div className="container">
                <div className="row">
                   <div className="col">
                       <Badge 
                       nombre={badge.nombre}
                       peso={badge.peso}
                       email={badge.email}
                       valor={badge.valor}
                       edad={badge.edad}
                       />
                   </div>
                   <div className="col">
                      <div>
                      <h2>
                          Acciones
                      </h2>
                      </div>
                      <div>
                      <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">Editar</Link>
                      </div>
                      <div>
                      <button onClick={props.onOpenModal} className="btn btn-danger">Borrar</button>
                      <DeleteBadgeModal
                        isOpen={props.isOpen} 
                        onClose={props.onCloseModal} 
                        deleteBadge={props.onDeleteBadge}
                       />
                      </div>
                   </div>
                </div>
            </div>
        </div>
    )

 }

 export default BadgeDetails;
