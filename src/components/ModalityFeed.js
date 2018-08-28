import React, { Component } from 'react';
import {Card} from 'semantic-ui-react';
import ModalityCard from './../components/ModalityCard';
import "../css/modalityFeed.css";

export default class ModalityFeed extends Component{
    render(){
        return(
            <Card.Group centered="true" className="modality-feed-container">
              <ModalityCard header="A" subHeader="Prova Teórica" content="Problemas matemáticos, de raciocínio e lógica de programação" meta="8º e 9º anos" begin="9:00" end="12:00"/>
              <ModalityCard header="B" subHeader="Prova Teórica" content="Problemas matemáticos, de raciocínio e lógica de programação" meta="Ensino Médio" begin="9:00" end="12:00"/>
              <ModalityCard header="C" subHeader="Prova Prática" content="Problemas de programação" meta="8º e 9º anos ou Ensino Médio" begin="8:00" end="12:00"/>
            </Card.Group>
        );
    }
}
