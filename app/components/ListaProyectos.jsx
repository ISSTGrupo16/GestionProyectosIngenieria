import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ProyectoVista from './ProyectoVista'

export default class ListaProyectos extends React.Component {

    constructor(props){
        super(props);
        this.proyectoSeleccionado.bind(this);
    }

    proyectoSeleccionado(index){
        this.props.proyectoSeleccionado(index);
    }

    render() {
        let proyectos = this.props.proyectos.map((proyecto, index) => {
            return(
                <ListGroupItem key={index}>
                    <ProyectoVista proyecto = {proyecto} key = {index} index = {index} onClick/>
                </ListGroupItem>
            );
        });

        return(
            <ListGroup>
                {proyectos}
            </ListGroup>
        );
    }
}