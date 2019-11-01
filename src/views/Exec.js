import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'
import './Exec.css'
import lucas from '../img/Lucas.jpg'
import martin from '../img/MartinZ.jpg'
import paulina from '../img/Paulina.jpg'
import jonathan from '../img/Jonathan.jpg'
import spencer from '../img/Spencer.jpg'
import linette from '../img/Linette.jpg'
import makenna from '../img/Makenna.jpg'

export default class Exec extends React.Component {
    render() {
        return (
            <div id='exec-div'>
                <h1 id='exec-title'>EXECUTIVE BOARD</h1>
                <Grid id='exec-grid'>
                    <Grid.Row className='grid-row' columns={4}>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={martin} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Martin Zugschwert</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={linette} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Linette Maliakal</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image id='spencer-headshot' className='headshot' src={spencer} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Spencer Johnston</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='grid-row' columns={3}>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={makenna} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Makenna Walsh</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={jonathan} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Jonathan Warkentin</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={paulina} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Paulina Adamski</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}