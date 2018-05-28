import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import '../css/topBanner.css';

export default class TopBanner extends Component{
	render(){
		return(
      <div className="top-banner-container">
				<div className="index-anchor" id="opei"/>
        <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1524237124/opei_logo_n5taqn.svg" size="big" centered/>
      </div>
		);
	}
}
