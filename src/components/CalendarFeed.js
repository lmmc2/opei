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
                        <TimelineCard align='left' header='Início das Inscrições' meta="09/04"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated='right'>
                        <TimelineCard align='right' header='Fim das Inscrições' meta="15/08"/>
                    </Grid.Column>
                    <Grid.Column floated='left'>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="right">
                        <Icon name="pencil" size="huge" flipped='horizontally'></Icon>
                    </Grid.Column>
                    <Grid.Column>
                        <TimelineCard align='left' header='Dia da Prova' meta="01/09"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated='right'>
                        <TimelineCard align='right' header='Contestamento de Questões' meta="02/09 - 08/09"/>
                    </Grid.Column>
                    <Grid.Column floated='left'>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="right">
                        <Icon name="gift" size="huge" flipped='horizontally'></Icon>
                    </Grid.Column>
                    <Grid.Column>
                        <TimelineCard align='left' header='Cerimônia de Premiação' meta="Em breve..."/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
