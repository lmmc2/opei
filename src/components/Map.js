import React, { Component } from 'react';

export default class Map extends Component {

    render() {
        return (
            <iframe 
                src={this.props.iframe}
                title={this.props.title}
                style={{
                    width: '100%',
                    height: 480
                }}
            >
            </iframe>
        )
    }
}