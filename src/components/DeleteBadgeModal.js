import React from "react"

import Modal from "./Modal";

function DeleteBadgeModal (props){
return <Modal isOpen={props.isOpen} onClose={props.onClose} >
    <div className="DeleteBadgeModal">
       <h1>
          Are you sure?
       </h1>
       <p>you are about to delete this badge.</p>
       <div>
           <button onClick={props.deleteBadge} className="btn btn-danger mr-4">Delete</button>
           <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
       </div>
    </div>
</Modal>
}

export default DeleteBadgeModal;