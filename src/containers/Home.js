import React, { Component } from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import CalendarFeed from './../components/CalendarFeed';
import Carousel from './../components/Carousel';
import Section from './../components/Section';
import ModalityFeed from './../components/ModalityFeed';
import { Parallax } from 'react-parallax';
import Navbar from './../components/Navbar';
import Instructions from './../components/Instructions';
import DownloadPDF from  './../components/DownloadPDF';

export default class Home extends Component{
    render(){
        return(
          <Navbar>
			<div className="index-content">
                <Carousel/>
                <div className="index-anchor" id="modalidades"/>
                <Section title="MODALIDADES">
                    <ModalityFeed/>
                </Section>
                <div className="index-anchor" id="calendario"/>
                <Section title="CALENDÁRIO">
                    <CalendarFeed/>
                </Section>
                <div className="index-anchor" id="instrucoes"/>
                <Section title="INSTRUÇÕES">
                    <Instructions/>
                </Section>
                <div className="index-anchor" id="download"/>
                <Section title="CARTÃO DE INSCRIÇÃO">
                    <DownloadPDF />
                </Section>
                <Parallax
                    style={{marginTop: "120px"}}
                    bgImage="https://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_2560,w_5184,y_350/v1524298239/IMG_0922_qhxvfo.jpg"
                    bgImageAlt=""
                    strength={200}>
                    <div style={{ height: '300px'}} />
                </Parallax>
                <div className="index-anchor" id="contato"/>
                <Section title="CONTATO">
                  <Card.Group centered="true" style={{justifyContent: "center"}}>
                    <Card>
                        <Card.Content>
                            <Card.Description>
                                Precisa falar conosco? Basta mandar uma mensagem na página do facebook, ou enviar um e-mail. Vamos te responder em um instante!
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content extra>
                            <div style={{display: "flex"}}>
                                <Icon name='mail outline' />
                                <p>opei@cin.ufpe.br</p>
                            </div>
                            <div style={{display: "flex"}}>
                                <Icon name='facebook' />
                                <a href="https://www.facebook.com/opei2018/" rel="noopener noreferrer" target="_blank">página da opei</a>
                            </div>
                        </Card.Content>
                    </Card>
                  </Card.Group>
                </Section>
                <Image style={{marginTop:"20px"}} centered size="huge" src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1534468738/opei_patrocinio_rcfmvi_wgktil.png"/>
            </div>
          </Navbar>
        );
    }
}
