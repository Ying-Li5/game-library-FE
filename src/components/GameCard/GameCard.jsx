import React from "react";
import Card from 'react-bootstrap/Card';
import style from './GameCard.css'

export const GameCard = (props) => {
    const { game } = props
    return (
        <Card className="card">
            <div className="game-card" style={ style }> 
                <Card.Img variant="top" src={ game.art } className="game-art"/>
                <Card.Body>
                    <Card.Title>{ game.title }</Card.Title>
                    <Card.Text>{ game.year }</Card.Text>

                    <a href={`/game/${ game._id }`} class="btn btn-secondary">More on { game.title }</a>
                </Card.Body>
            </div>
        </Card>
    )
}