import React, { Component } from 'react';
import {Card, Icon} from 'semantic-ui-react';
import '../css/modalityCard.css';

export default class ModalityCard extends Component{
    render(){
        return(
            <Card>
                <Card.Content>
                    <Card.Header textAlign="center">{this.props.header}</Card.Header>
                    <Card.Meta textAlign="center">{this.props.subHeader}</Card.Meta>
                    <Card.Description textAlign="center">{this.props.content}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="modality-card-extra">
                        <div className="modality-card-extra-info">
                            <Icon name='user' className="modality-card-icon"/>
                            <div>{this.props.meta}</div>
                        </div>
                        <div className="modality-card-extra-info">
                            <Icon name='clock outline' className="modality-card-icon"/>
                            <div>{this.props.begin} às {this.props.end}</div>
                        </div>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}
