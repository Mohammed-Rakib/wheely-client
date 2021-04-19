import React from 'react';
import { useEffect, useState } from 'react';
import CutomarReviewCard from './CutomarReviewCard';


const CuntomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => { 
        const url = 'https://wheely-service.herokuapp.com/review';
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setReviews(result)
        })
    } ,[])
    return (
        <div className="container my-5 ">
            <div >
                <h1>Customer Review </h1>
                <hr className="  mb-5 mt-4 w-25 horrizontal-role"/>
            </div>
            
           <div className="row">
               {
                   reviews.map(review => <CutomarReviewCard review={review} key={review._id} ></CutomarReviewCard> )
               }
           </div>
        </div>
    );
};

export default CuntomerReview;