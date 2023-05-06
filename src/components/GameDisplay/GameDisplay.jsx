import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './GameDisplay.css'
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";
import AddComment from '../AddComment/AddComment'

const GameDisplay = (props) => {
    const [sortState, setSortState] = useState(true)
    const [buttonState, setButtonState] = useState('Sort Newest to Oldest')
    const [gameState, setGameState] = useState() //First one is the state, second one is a function to set the state
    const [reviewState, setReviewState] = useState([])
    const { game_id } = useParams()

    const addReview = (newReview) => {
        setReviewState([...reviewState, newReview])
    }

    const sortReview = () => {
        if (sortState === true) {
            let newArr = reviewState.toSorted((a,b) => {
                //this was weird :(
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            })
            setReviewState(newArr)
            setButtonState('Sort Oldest to Newest')
            setSortState(false)
        } else {
            let newArr = reviewState.toSorted((a,b) => {
                //this was weird :(
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            })
            setReviewState(newArr)
            setButtonState('Sort Newest to Oldest')
            setSortState(true)
        }
    }

    useEffect(() => {
        const url = `http://localhost:8080/game/${game_id}`
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        }).then((result) => {
            result.json().then((resolvedResult) => setGameState(resolvedResult))
        })
    }, [])

    useEffect(() => {
        const url = `http://localhost:8080/review/game/${game_id}`
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        }).then((result) => {
            result.json().then((resolvedResult) => setReviewState(resolvedResult))
        })
    }, [])

    if (gameState == undefined) {
        return <div></div>
    }
    
    return (
        <div className="display-container" style={ style }>
            <h1 className="display-title">{ gameState.title }</h1>
            
            <div className="display-img">
                <img variant="top" src={ gameState.art } className="game-art-display"/>
            </div>
            
            <div className="display-info"> 
                <div className="game-container-info">
                    <h4 className="game-title">{ gameState.title }</h4>
                    <p className="content">{ gameState.description }</p>
                    <p className="content">RATING: { gameState.average_score }/10</p>
                    <p className="content">RELEASE DATE: { gameState.year } </p>
                </div>
            </div>

            <div className="display-form">
                <h4 className="add-title">HAVE A REVIEW?</h4>
                <AddComment game_id={ game_id } addReview={ addReview }/>
            </div>

            <div className="display-reviews">
                <div className="text-holders">
                    <div className="title-holder">
                        <h4 className="reviews-title">REVIEWS</h4>
                    </div>

                    <div className="sort-holder">
                    <button type="button" className="sort-button"  onClick={ sortReview }>{ buttonState }</button>
                    </div>
                </div>
                    <div className="reviews-container">
                        < ReviewDisplay reviews={ reviewState }/>
                    </div>
            </div>
        </div>
    )
}

export default GameDisplay