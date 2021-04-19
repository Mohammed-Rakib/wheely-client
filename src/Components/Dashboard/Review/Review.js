import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardNav from '../DashboardNav/DashboardNav';

const Review = () => {
    const { register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        const reviewData = {
            name: data.name,
            company: data.company,
            review: data.review,
        };
        console.log(reviewData);
        const url = `https://wheely-service.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        
        .then(data => {
            console.log('server side response', data);
        })
        
    }
    return (
        <div className="container my-5">
            <DashboardNav></DashboardNav>
            <h1 className="my-2 ">Please Make a review </h1>
            <hr className="horrizontal-role mb-5"/>
                <form onSubmit={handleSubmit(onSubmit)} >
                <input className="form-control my-2" name="name" placeholder="Your Name" {...register("name")} />
                <input className="form-control my-2" name="name" defaultValue="Customer" {...register("company")} />
                <textarea name="details" className="form-control" placeholder="Services review....." {...register("review", { required: true })}  rows="3"></textarea>
                
                <input className="form-control my-2 bg-outline-primary" type="submit" />
                </form>
        </div>
    );
};

export default Review;