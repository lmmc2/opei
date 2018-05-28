import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import Section from './../components/Section';
import OldExams from './../components/OldExams';
import Navbar from './../components/Navbar';
import TopBanner from './../components/TopBanner';
import GenericMenu from './../components/GenericMenu';

export default class Practice extends Component {
	render(){
		const exams = [
            {
                year: "2017",
                modality: "Modalidade A - Teórica",
                description: "8º e 9º anos",
                exam: "https://drive.google.com/file/d/1ppywxyUYLThIAes80_TofZdS5mt8eeXP/view?usp=sharing",
                solutions: "https://drive.google.com/file/d/1wfBpLJact7y7ZHoGCX-ntIoUkGvPmVr_/view?usp=sharing",
            },
            {
                year: "2017",
                modality: "Modalidade B - Teórica",
                description: "Ensino Médio",
                exam: "https://drive.google.com/file/d/1KH7bxNTIG6emx1XpQlDlHT3ksbQ-7CG8/view?usp=sharing",
                solutions: "https://drive.google.com/file/d/1n0n5wE1Cfq45FY2mrswMrbKe80A89lkq/view?usp=sharing",
            },
            {
                year: "2016",
                modality: "Modalidade A - Teórica",
                description: "5º a 7º anos",
                exam: "https://drive.google.com/file/d/1ZDUY8BM-bJhuPQvCQ06it9qvFA_D3lEr/view?usp=sharing",
                solutions: "https://drive.google.com/file/d/1kUG6X2JObrkWZEtYfDhNiXLpVqITBChW/view?usp=sharing",
            },
            {
                year: "2016",
                modality: "Modalidade B - Teórica",
                description: "8º e 9º anos",
                exam: "https://drive.google.com/file/d/1NE10EDBg0BDDgZuU8bixZ-CYiady1M00/view?usp=sharing",
                solutions: "https://drive.google.com/file/d/10zKY1DAAWXsDMCKqW7gutTdCRwcLIDLs/view?usp=sharing",
            },
            {
                year: "2016",
                modality: "Modalidade C - Teórica",
                description: "Ensino Médio",
                exam: "https://drive.google.com/file/d/16N9uXiph1nJ9wO68_av7Pa4almX_9WNJ/view?usp=sharing",
                solutions: "https://drive.google.com/file/d/1ozn5y6I27IcC6vTbtjyF7UCXKAC4ikA8/view?usp=sharing",
            },
            {
                year: "2015",
                modality: "Modalidade A - Teórica",
                description: "Ensino Fundamental",
                exam: "https://drive.google.com/file/d/1dufFr6ksNqAQfDpkTquTDOOzyG_B5Rij/view?usp=sharing",
                solutions: "https://drive.google.com/file/d/19_6sk8UmYV9kdEr17EY9pj7lJ3Y9FTV3/view?usp=sharing",
            },
		];
		const exercices = [
			{
				key: "exercice1",
				title: "Questões de Olimpíadas - OBI",
				content: <div className="practice-menuContainer">
							<h2>Olimpíada Brasileira de Informática</h2>
							<p className="index-sectionText">A <a href="https://olimpiada.ic.unicamp.br">OBI</a> possui ótimos recursos para praticar no mundo da computação! Desde o nível teórico até a modalidade prática, realizar os exercícios dela vai te ajudar muito à praticar para a OPEI!</p>
							<br/><br/><Button href="https://olimpiada.ic.unicamp.br/pratique/" secondary>Quero Treinar!</Button>
						</div>,
			},
		];
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="prova-teorica"/>
					<Section title="PROVA TEÓRICA">
						<p className="index-sectionText">As provas teóricas abordam conceitos de lógica de programação, contextualizado em questões de lógica, raciocínio e matemática. Nenhum conhecimento específico da área de computação é necessário para resolver as questões. Qualquer termo ou conceito dessa área presente na prova será explicado no próprio enunciado da questões, de forma didática e educativa.</p>
					</Section>
					<Section title="EXERCÍCIOS E PROBLEMAS">
						<GenericMenu items={exercices}/>
					</Section>
					<div className="index-anchor" id="provas-antigas"/>
					<Section id="provas-antigas" title="PROVAS ANTIGAS">
						<OldExams exams={exams}/>
					</Section>
				</div>
			</Navbar>
		);
	}
}
