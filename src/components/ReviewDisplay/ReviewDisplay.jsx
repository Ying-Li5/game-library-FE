import React from "react";
import style from './ReviewDisplay.css'
import Avatar from '../../public/images/avatar.png'

const ReviewDisplay = (props) => {
    const { reviews } = props
    return (
        <div className="review-container" style={ style }>
            {reviews.map((review) => {
                return (
                    <div className="reviewer-container">
                        <div className="reviewer">
                            <div className="profile-img">
                                <img src={ Avatar } alt="Avatar" class='avatar' />

                                <div className="reviewer-info">
                                    <p className="content-reviewer">
                                        { review.username } 
                                        <br />
                                        Score: { review.score }
                                    </p>
                                </div> 
                            </div>
                        
                            <div className="reviewer-description">
                                <p className="content-title">{ review.title }</p>
                                <p className="content">{ review.content }</p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ReviewDisplay