import React, {Component} from 'react';
import TimelineCard from './TimelineCard';
import {Grid, Icon} from 'semantic-ui-react';

export default class HistoryFeed extends Component{
    render(){
        return(
          <Grid columns={2} divided>
						<Grid.Row>
							<Grid.Column textAlign="right">
								<Icon name="flag checkered" size="huge" flipped='horizontally'></Icon>
							</Grid.Column>
							<Grid.Column>
								<TimelineCard align='left' header='2015' description="50 Alunos" meta="4 Escolas"/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column floated='right'>
								<TimelineCard align='right' header='2016' description="256 Alunos" meta="13 Escolas"/>
							</Grid.Column>
							<Grid.Column floated='left'>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
							</Grid.Column>
							<Grid.Column>
								<TimelineCard align='left' header='2017' description="512 Alunos" meta="25 Escolas"/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
        );
    }
}
