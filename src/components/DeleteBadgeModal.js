import React from "react"

import Modal from "./Modal";

function DeleteBadgeModal (props){
return <Modal isOpen={props.isOpen} onClose={props.onClose} >
    <div className="DeleteBadgeModal">
       <h1>
          ¿Estás seguro?
       </h1>
       <p>Estas a punto de borrar este registro.</p>
       <div>
           <button onClick={props.deleteBadge} className="btn btn-danger mr-4">Borrar</button>
           <button onClick={props.onClose} className="btn btn-primary">Cancelar</button>
       </div>
    </div>
</Modal>
}

export default DeleteBadgeModal;