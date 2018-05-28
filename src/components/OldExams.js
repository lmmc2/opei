import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import '../css/oldExams.css';

export default class Practice extends Component {
	render(){
		return(
			<Card.Group centered="true" className="old-exams-container">
                {this.props.exams.map(exam =>
                    <Card key={exam.exam}>
                        <Card.Content>
                            <Card.Header>{exam.year}</Card.Header>
                            <Card.Meta>{exam.modality}</Card.Meta>
                            <Card.Description>{exam.description}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button href={exam.exam} primary target="_blank" rel="noopener noreferrer">Prova</Button>
                                <Button disabled={exam.solutions == null} href={exam.solutions} secondary>Gabarito</Button>
                            </div>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
		);
	}
}
