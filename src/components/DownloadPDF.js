import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class DownloadPDF extends Component {
    state = { value: "student", id: "" }

    handleChange = (e, { value }) => this.setState({ value });

    handleInputChange = (e, { id, value }) => this.setState({ id: value });

    handleSubmit = () => {
        const { value, id } = this.state;
        const link = `https://docs.google.com/gview?url=https://opei.cin.ufpe.br/2018/registrationReceipt/${value}/${id}.pdf`;
        window.open(link);
    }

    render() {
        const { value, id } = this.state;
        const idType = (value === 'institution' ? 'CNPJ' : 'CPF');

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input
                        type='number'
                        onChange={this.handleInputChange}
                        name="id"
                        value={id}
                        fluid
                        label={`${idType} (apenas números)`}
                        placeholder={idType} />
                </Form.Group>
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
                <Form.Button>Baixar Cartão de Inscrição</Form.Button>
            </Form>
        )
    }
}