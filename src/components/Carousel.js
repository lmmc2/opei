import React, {Component} from 'react';
import {Image, Button, Container} from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/carousel.css';

export default class Slider extends Component{
	render(){
    const imgs = [
      'https://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_2560,w_5184,y_798/v1524300268/IMG_0929_siwl6h.jpg',
      'https://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_2560,w_5184,y_798/v1521318977/IMG_0943_auz3o4.jpg',
      'https://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_2560,w_5184,y_798/v1521318977/IMG_0964_bs3zo8.jpg',
      'https://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_2560,w_5184,y_798/v1521318977/IMG_1070_roed5s.jpg',
      'https://res.cloudinary.com/dkbuneg9h/image/upload/c_crop,h_2560,w_5184,y_798/v1524298238/IMG_0950_x1ddfz.jpg',
    ];
		return(
			<div>
				<div className="index-anchor" id="inscricoes"/>
				<div className="carousel-container">
	        <Carousel
	          showArrows={false}
	          showStatus={false}
	          showIndicators={false}
	          showThumbs={false}
	          infiniteLoop={true}
	          autoPlay={true}
	          interval={10000}>
	          {imgs.map(image =>
	            <img key={image} alt="" className="carousel-image" src={image}/>
	          )}
	        </Carousel>
	        <div className="carousel-button-container">
	          <Container textAlign="center">
	              <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1524237124/opei_logo_n5taqn.svg" size="big" centered/>
	              <Button size="large" className="carousel-button" href="/pratique-teorica#provas-antigas">Gabaritos das provas TEÓRICAS!</Button>
								<br/>
								<Button size="large" className="carousel-button" href="/pratique-pratica#provas-antigas">Gabarito da prova PRÁTICA!</Button>
	          </Container>
	        </div>
	      </div>
			</div>
		);
	}
}
