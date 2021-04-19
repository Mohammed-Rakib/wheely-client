import React from 'react';
import { useHistory } from 'react-router';
import './Services.css'
const ServiceCard = ({service}) => {
    const history = useHistory();
    const id = service._id;
    const handleOrder = () => {
        history.push(`/service/${id}`)
    }
    return (
        <div className="col-lg-4 col-md-6">
            <div  onClick={handleOrder} className="card service-card p-4 m-2 ">
                <img src={service.imageUrl} className="service-image" alt=""/>
                <div className="card-body">
                    <h4  className="simple-text">{service.name}</h4 >
                    <p className="para-text">{service.details}</p>
                    <h6 className="simple-text"> Cost : ${service.price}</h6>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;