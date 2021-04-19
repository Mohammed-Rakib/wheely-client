import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './CustomarReviewCard.css'
const CutomarReviewCard = ({review}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card review-card p-4 m-2 ">
                    <h4  className="text-success">{review.name}</h4 >
                    <p className="para-text">{review.company}</p>
                    <p>
                        <AiFillStar className="star"/>
                        <AiFillStar className="star"/>
                        <AiFillStar className="star"/>
                        <AiFillStar className="star"/>
                        <AiFillStar className="star"/>
                    </p>
                    <h6 >{review.review}</h6>
                
            </div>
        </div>
    );
};

export default CutomarReviewCard;