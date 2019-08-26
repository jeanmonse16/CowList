import React from "react";

class Badgeform extends React.Component{
    
  

//handleChange = e => {
        //this.setState({
           // [e.target.name]: e.target.value
     //   })
  //  };

//handleClick = e => {
       // console.log("boton presionado")
      //  console.log(this.state)
   // }

   // handleSubmit = e => {
        //console.log(this.state)
   //}

    render(){
        return(

            <div>
                
                <form>
                    <div className="form-group">
                        <label> Nombre</label>
                        <input value={this.props.formValues.nombre} onChange={this.props.onChange} className="form-control" type="text" name="nombre" ></input>
                    </div>
                    
                    <div className="form-group">
                        <label> Peso</label>
                        <input value={this.props.formValues.peso} onChange={this.props.onChange} className="form-control" type="text" name="peso" ></input>
                    </div>

                    <div className="form-group">
                        <label> Valor</label>
                        <input value={this.props.formValues.valor} onChange={this.props.onChange} className="form-control" type="text" name="valor" ></input>
                    </div>

                    <div className="form-group">
                        <label> Edad</label>
                        <input value={this.props.formValues.edad} onChange={this.props.onChange} className="form-control" type="text" name="edad" ></input>
                    </div>
                    <button onClick={this.props.onClick} className="btn btn-primary" type="button">Save</button>
                    {this.props.error && (<p className="text-danger">
                        {this.props.error.message}
                    </p>) }
                </form>
            </div>
        )
    }
}

export default Badgeform;