import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminDashboard from '../../AdminDashboard/AdminDashboard';

const AddServices = () => {
    const { register, handleSubmit} = useForm();
    
    const [imageUrl, setImageUrl] = useState('');
    const onSubmit = (data) => {
        const servicesData = {
            name: data.name,
            price: data.price,
            details: data.details,
            imageUrl:imageUrl
        };
        const url = `http://localhost:4000/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(servicesData)
        })
        
        .then(data => {
            console.log('server side response', data);
        })
        
    }
    const handleImageChange = (service) => {
       
        const imageData = new FormData();
        imageData.set('key','fe834545cf9ccab761e32c03f567e890');
        imageData.append('image', service.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function (response) {
            setImageUrl(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
        <div className="container my-5 ">
            <AdminDashboard></AdminDashboard>
            <h1 className="my-2 simple-text">Add Services</h1>
            <hr className="horrizontal-role mb-5"/>
                <form onSubmit={handleSubmit(onSubmit)} >
                <input className="form-control my-2" name="name" placeholder="Add Services" {...register("name")} />
                <textarea name="details" className="form-control" placeholder="Services details....." {...register("details", { required: true })}  rows="3"></textarea>
                <input className="form-control my-2" name="name" placeholder=" price" {...register("price")} />
                <input className="form-control" name="exampleRequired" type="file" onChange={handleImageChange} />
                <input className="form-control my-2 bg-outline-primary" type="submit" />
                </form>
        </div>
    );
};

export default AddServices;