import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import Section from './../components/Section';
import Navbar from './../components/Navbar';
import TopBanner from './../components/TopBanner';

export default class Spread extends Component {
	render(){
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="cartaz"/>
					<Section title="MATERIAL DE DIVULGAÇÃO">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="practice-menuContainer">
									<p className="index-sectionText" style={{marginBottom: "40px"}}>Professores, escolas, pais e alunos: vocês também podem ser multiplicadores! Te encorajamos à imprimir o cartaz à baixo e colar em um mural na instituição de ensino em que frequenta. Isso vai ajudar outros alunos à descobrir o mundo da informática e conhecer a OPEI!</p>
									<Button secondary href="https://drive.google.com/a/cin.ufpe.br/uc?authuser=0&id=1Y29jK8qWneB6cSV7w5fTmSnhJeuwcv-r&export=download">Baixar Cartaz!</Button>
								</div>
								<div className="index-iframe">
									<iframe title="spread" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1Y29jK8qWneB6cSV7w5fTmSnhJeuwcv-r/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
				</div>
			</Navbar>
		);
	}
}
