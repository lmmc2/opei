import React, {Component} from 'react';
import Section from './../components/Section';
import Navbar from './../components/Navbar';
import TopBanner from './../components/TopBanner';
import { HashLink as Link } from 'react-router-hash-link';

export default class Notice extends Component {
	render(){
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="regulamento"/>
					<Section title="REGULAMENTO">
						<div style={{textAlign: "center"}}>
							<div>
								<p className="index-sectionText" style={{marginBottom: "40px"}}>Pedimos que as escolas, delegados e alunos inscritos leiam atentamente cada item previsto no regulamento antes da realização das provas, e entrem em <Link to="/#contato">contato</Link> conosco em caso de alguma dúvida!</p>
								<div className="index-iframe">
									<iframe title="notice" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1QVhCrwtcPjzaLyuCULg3g9GhtCHRS71X/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
				</div>
			</Navbar>
		);
	}
}
