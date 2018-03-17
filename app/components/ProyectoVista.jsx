import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


export default class ProyectoVista extends React.Component {

    render() {
        return(
            <div>
                <ListGroup onClick={this.clickVisita}>
                    <ListGroupItem>
                        {this.props.proyecto.nombreProyecto}
                    </ListGroupItem>
                    <ListGroupItem>
                        {this.props.proyecto.numeroTrabajadores + " trabajadores asignados"}
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}