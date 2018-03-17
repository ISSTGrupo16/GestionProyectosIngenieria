import React from 'react';
import {Button} from 'react-bootstrap';
export default class AddProyecto extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <Button onClick={this.props.clickBoton.bind(this)} block>
                Crear nuevo proyecto
            </Button>
        );
    }
}