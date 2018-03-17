import React from 'react';
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';

export default class PantallaFormulario extends React.Component {

    constructor(props){
        super(props);

    }

    render() {
        return(
            <div>
              <Button onClick = {this.props.clickVolver.bind(this)}>
                  Volver a la pantalla anterior
              </Button>
              <form>

              </form>
            </div>
        );
    }
}