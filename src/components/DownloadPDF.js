import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class DownloadPDF extends Component {
    state = { value: "student", id: ""}

    handleChange = (e, { value }) => this.setState({ value });

    handleInputChange = (e, { id, value }) => this.setState({ id: value });

    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
        const { value, id } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    {value !== 'institution' ?
                        (<Form.Input onChange={this.handleInputChange} name="id" value={id} fluid label='CPF' placeholder='CPF' />) :
                        (<Form.Input onChange={this.handleInputChange} name="id" value={id} fluid label='CNPJ' placeholder='CNPJ' />)}
                </Form.Group>
                <Form.Group>
                    <Form.Radio
                        label='Aluno'
                        value='student'
                        checked={value === 'student'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Delegado'
                        value='delegate'
                        checked={value === 'delegate'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Instituição'
                        value='institution'
                        checked={value === 'institution'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button>Baixar Cartão de Inscrição</Form.Button>
            </Form>
        )
    }
}