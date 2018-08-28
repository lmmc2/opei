import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

export default class TimelineCard extends Component {
    render() {

        return (
            <Card>
                <Card.Content textAlign={this.props.align}>
                    <Card.Header>{this.props.header}</Card.Header>
                    <Card.Description>{this.props.description}</Card.Description>
                    <Card.Meta>{this.props.meta}</Card.Meta>
                    {this.props.isExam ? 
                        (<div>
                            <Card.Meta><b>Modalidade A:</b> 9:00 às 12:00</Card.Meta>
                            <Card.Meta><b>Modalidade B:</b> 9:00 às 12:00</Card.Meta>
                            <Card.Meta><b>Modalidade C:</b> 8:00 às 12:00</Card.Meta>
                        </div>) 
                        : "" }
                </Card.Content>
            </Card>
        );
    }
}