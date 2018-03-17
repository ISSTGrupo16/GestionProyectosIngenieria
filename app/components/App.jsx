import React from 'react';
import {PageHeader} from 'react-bootstrap';
import './../assets/scss/main.scss';
import ListaProyectos from './ListaProyectos'



export default class App extends React.Component {
  render() {
    return (
        <div>
          <PageHeader id="heading">Gestión de proyectos de ingeniería - Grupo 16</PageHeader>
          <ListaProyectos></ListaProyectos>
        </div>
    );
  }

}

