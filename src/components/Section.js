import React, {Component} from 'react';
import {Container, Header, Icon} from 'semantic-ui-react';
import '../css/section.css';

export default class Section extends Component{
    render(){
        return(
            <div id={this.props.id}>
                <Container text className="section-container">
                    <Header size="huge" dividing textAlign="center">
                        {this.props.title}
                        {this.props.icon != null && <Icon name={this.props.icon} color="grey"/>}
                    </Header>
                    <br/><br/>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
