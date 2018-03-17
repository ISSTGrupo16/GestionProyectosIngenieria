import React from 'react';
import {PageHeader} from 'react-bootstrap';
import './../assets/scss/main.scss';
import ListaProyectos from './ListaProyectos'
import AddProyecto from './AddProyecto'
import PantallaFormulario from './PantallaFormulario'



export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pantalla : "pantallaInicio"
        };
        this.clickBoton = this.clickBoton.bind(this);
        this.clickVolver = this.clickVolver.bind(this);
    }

    clickBoton(){
        console.log("has tocado el botón");
        this.setState({
            pantalla: "pantallaFormulario"
        });
    }

    clickVolver(){
        console.log("has tocado volver");
        this.setState({
            pantalla : "pantallaInicio"
        })
    }

  render()
  {
    var cuerpo = null
    if(this.state.pantalla === "pantallaInicio"){
        cuerpo = (
            <div>
              <AddProyecto clickBoton={this.clickBoton}/>
              <ListaProyectos></ListaProyectos>
            </div>
        );
    }else{
        cuerpo = (
        <PantallaFormulario clickVolver ={this.clickVolver}/>
        );
    }

    return(
        <div>
            <PageHeader id="heading">Gestión de proyectos de ingeniería - Grupo 16</PageHeader>
            {cuerpo}
        </div>
    );

  }

}

