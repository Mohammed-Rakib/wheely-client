import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect( () => { 
        const url = 'https://wheely-service.herokuapp.com/services';
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setService(result)
        })
    } ,[])
    return (
        <div className="container my-5 ">
            <div className="text-center">
                <h1>Our Services</h1>
                <hr className=" mx-auto my-3 horrizontal-role"/>
            </div>
            <p className="text-center">
            <p className="my-5 para-text w-75 mx-auto">Dramatically target proactive infrastructures before interactive growth strategies. Compellingly fashion global leadership skills and multidisciplinary infrastructures.</p>
            </p>
           <div className="row">
               {
                   services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard> )
               }
           </div>
        </div>
    );
};

export default Services;