import React, { Component } from 'react';

export default class Instructions extends Component {

    render() {
        return (
            <ul>
                <li><b>A prova deverá ser feita toda a lápis</b>, não sendo necessário levar caneta.</li>
                <li>No dia da prova é imprescindível que o aluno esteja portando um <b>documento oficial com foto e este cartão de inscrição</b>. Não será possível participar da prova sem documento de identificação.</li>
                <li>Ao ingressar na sala, o aluno deverá <b>entregar ao fiscal de sala todo e qualquer tipo de dispositivo eletrônico que esteja em seu porte</b>, sendo estes devolvidos ao fim da prova. Portar esse tipo de material durante a execução da prova resulta em desqualificação do aluno.</li>
                <li>Recomenda-se que seja planejada sua chegada no local de aplicação de prova com uma antecedência mínima de 30 minutos. <b>Lembramos que a BR-101 Sul, no trecho em frente a UFPE, encontra-se em obras, resultando em grandes congestionamentos nos arredores do campus.</b></li>
            </ul>
        )
    }
}