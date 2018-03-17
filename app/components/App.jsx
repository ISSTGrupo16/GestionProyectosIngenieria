import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import './../assets/scss/main.scss';
import ListaProyectos from './ListaProyectos'
import AddProyecto from './AddProyecto'
import PantallaFormulario from './PantallaFormulario'

let mockProyecto = [{nombreProyecto: "proy1", numeroTrabajadores:3},{nombreProyecto: "proy2", numeroTrabajadores:3}];

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pantalla : "pantallaInicio",
            proyectos: mockProyecto
        };
        this.clickBoton = this.clickBoton.bind(this);
        this.clickVolver = this.clickVolver.bind(this);
        this.crearProyecto = this.crearProyecto.bind(this);
        this.proyectoSeleccionado = this.proyectoSeleccionado.bind(this);
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

    crearProyecto(proyecto){
        this.setState({
            proyectos : this.state.proyectos.concat(proyecto),
            pantalla : "pantallaInicio"
        });
    }

    proyectoSeleccionado(index){
        this.setState({
            pantalla : "gestionProyecto"
        })
    }

  render()
  {
    var cuerpo = null
    if(this.state.pantalla === "pantallaInicio"){
        cuerpo = (
            <div>
              <AddProyecto clickBoton={this.clickBoton} />
              <ListaProyectos proyectos ={this.state.proyectos} proyectoSeleccionado={this.proyectoSeleccionado}></ListaProyectos>
            </div>
        );
    }else if (this.state.pantalla === "pantallaFormulario"){
        cuerpo = (
        <PantallaFormulario clickVolver ={this.clickVolver} crearProyecto={this.crearProyecto}/>
        );
    }

    return(
        <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Gestión de proyectos de ingeniería - Grupo 16
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title={<span><Glyphicon glyph="user"/> Tipo de usuario</span>} id="dropdown-user">
                            <MenuItem eventKey={1.1}>Gestor de proyectos</MenuItem>
                            <MenuItem eventKey={1.2}>Trabajador</MenuItem>
                            <MenuItem eventKey={1.3}>RRHH</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {cuerpo}
        </div>
    );

  }

}

