import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';

const BookServiceForm = ({service}) => {
    const [loggednInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        const servicesData = {
            name: data.name,
            eamil: data.email
        };
        console.log(data)
    }

    const stripePromise = loadStripe('pk_test_51IeD1mEcf4uBSr0U2HuB6a6jG8EKA3K6NybMeDbw1lFutmhhWSe3u9DyS1F6qsZe1QtQjbbpsT6OfTz5Z5FzFPcL00jBP8JiZ2');
    return (
        <div className="w-50 mx-auto mt-5">
            <form onSubmit={handleSubmit(onSubmit)} >
                <input className="form-control my-2"  defaultValue={`${service.name}`} {...register("productName")} />
                <input className="form-control my-2"  placeholder=" Your Name" {...register("name" , { required: true })} />
                <input className="form-control my-2"  placeholder=" Email" {...register("email", { required: true })} />
                
                <p>Your Service will charge will be <span className="simple-text my-2">${service.price}</span> </p>
                <input className="form-control my-2 bg-outline-primary" type="submit" value="Pay" />
            </form>
            <Elements stripe={stripePromise}>
                
            </Elements>
        </div>
    );
};

export default BookServiceForm;