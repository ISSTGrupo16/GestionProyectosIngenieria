import React from 'react';
import {Button, Form, FormControl, FormGroup, ControlLabel, Glyphicon} from 'react-bootstrap';


let mock = {nombreProyecto: "proyX", numeroTrabajadores: 5}

export default class PantallaFormulario extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeNombre = this.changeNombre.bind(this);
        this.changeNumTrab = this.changeNumTrab.bind(this);
        this.changeHoras = this.changeHoras.bind(this);
        this.state = {
            nombreProyecto: "",
            numeroTrabajadores: 0,
            horasPorTrabajador: 0
        }
    }

    handleSubmit(event) {
        console.log("Se ha pulsado submit:");
        let proy = {
            nombreProyecto: this.state.nombreProyecto,
            numeroTrabajadores: this.state.numeroTrabajadores,
            horasPorTrabajador: this.state.horasPorTrabajador
        };
        this.props.crearProyecto(proy);
        event.preventDefault();
    }

    changeNombre(e){
        this.setState({nombreProyecto: e.target.value})
    }

    changeNumTrab(e){
        this.setState({numeroTrabajadores: e.target.value})
    }

    changeHoras(e){
        this.setState({horasPorTrabajador: e.target.value})
    }

    render() {
        return(
            <div>
              <Button onClick = {this.props.clickVolver.bind(this)}>
                  <Glyphicon glyph="menu-left"/>Volver a la pantalla anterior
              </Button>
              <form onSubmit={this.handleSubmit}>
                <FormGroup  controlId="nombreProyecto" >
                    <ControlLabel>Introduzca un nombre para el proyecto: </ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="nombre del proyecto"
                        onChange={this.changeNombre}
                    />
                </FormGroup>
                <FormGroup  controlId="numeroTrabajadores" >
                    <ControlLabel>¿Cuántos trabajadores desea asignar? </ControlLabel>
                        <FormControl
                          type="text"
                          placeholder="número de trabajadores asignados al proyecto"
                          onChange={this.changeNumTrab}
                        />
                </FormGroup>
                <FormGroup  controlId="horasTrabajador" >
                  <ControlLabel>¿Cuántas horas hay previstas por trabajador? </ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="número de horas asignadas a cada trabajador"
                      onChange={this.changeHoras}
                    />
                </FormGroup>
                <Button type="submit" >Crear Proyecto</Button>
              </form>
            </div>
        );
    }
}