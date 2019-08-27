import React from "react";

import {Link} from "react-router-dom"

import "./styles/BadgesList.css";

import favicon from "../images/favicon.png";
import Gravatar from"./Gravatar";

function useSearchBadges(badges){
      const [ query, setQuery] = React.useState("")

      const [filteredBadges, setfilteredBadges] = React.useState(badges)

      React.useMemo( () => {
        const result = badges.filter(badge => {
          return ` ${badge.nombre} `.toLowerCase().includes(query.toLowerCase())
        })

        return setfilteredBadges(result)
        }, [badges, query]);

        return {query, setQuery, filteredBadges}
}

function Badgeslist (props)
{
      const badges = props.badges
      const {query, setQuery, filteredBadges} = useSearchBadges(badges)

       if(filteredBadges.length === 0){
           return (
               <div>
                   <div className="form-group">
                     <label><h3>Buscar Animal</h3></label>
                     <input type="text" className="form-control" 
                           value={query}
                           onChange={ e => {
                           setQuery(e.target.value)
                            }}
                     />
                  </div>
                   <h3>
                       Ningún animal fue encontrado
                   </h3>
                   <Link to="badges/new" className="btn btn-primary">Añadir nuevo animal</Link>
               </div>
           )
       }

       return (
        <div className="BadgesList">
          <div className="form-group">
             <label><h3>Buscar Animal</h3></label>
             <input type="text" className="form-control" 
             value={query}
             onChange={ e => {
                 setQuery(e.target.value)
             }}
             />
          </div>
          <ul className="list-unstyled">
                {filteredBadges.map(
                    (badge) => {
                        return (
                        <li  key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`} >
                              <div className="BadgesListItem">

                                  <Gravatar 
                                  className="BadgesListItem__avatar" email={badge.email} >
                                  </Gravatar>
                                <div>
                                       <h4> {badge.nombre} </h4> 
                                       <p className="twitter__blue_font">

                                           {badge.peso} kg
                                       </p>
                                       <p> 
                                           Valor: {badge.valor} $
                                       </p>
                                       <p> 
                                           Edad: {badge.edad}
                                       </p>
                                </div>

                              </div>
                            </Link>
                            
                        </li>
                             )
                     }
                )}
            </ul>

        </div>   
        
       )
    
}

export  default Badgeslist;