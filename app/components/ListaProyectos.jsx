import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import AddProyecto from './AddProyecto'

export default class ListaProyectos extends React.Component {

    render() {

        return(
            <ListGroup>
                <ListGroupItem>
                    <AddProyecto></AddProyecto>
                </ListGroupItem>
            </ListGroup>
        );
    }
}