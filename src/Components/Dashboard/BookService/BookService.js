import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookServiceForm from '../BookServiceForm/BookServiceForm';
import DashboardNav from '../DashboardNav/DashboardNav';

const BookService = () => {
    const {id} = useParams();
    const [services , setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then( res => res.json() )
        .then(data => {
            setServices(data);
        })
    },[]);
    const service = services.filter(serv => serv._id === id);

    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="container my-5">
            {
                service.map( serv => <BookServiceForm service={serv} key={serv._id}></BookServiceForm>)
            }
        </div>
        </section>
    );
};

export default BookService;