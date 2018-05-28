import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

export default class TimelineCard extends Component{
    render(){
      return(
        <Card>
            <Card.Content textAlign={this.props.align}>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Description>{this.props.description}</Card.Description>
                <Card.Meta>{this.props.meta}</Card.Meta>
            </Card.Content>
        </Card>
      );
    }
}