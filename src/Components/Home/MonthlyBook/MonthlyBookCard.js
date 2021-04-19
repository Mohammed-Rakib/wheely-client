import React from 'react';
import './MonthlyBook.css'

const MonthlyBookCard = ({book}) => {
    return (
        <div className="col-lg-4 col-md-6 my-5">
            <div className="card plan-card text-center p-3">
                <h2 className="card-title simple-text">{book.title}</h2>
                <h1> <small className="simple-text">$</small>{book.monthlyCost}<small className="simple-text">/m</small>  </h1>
                <p className="my-3">{book.benifit1}</p>
                <p className="my-3">{book.benifit2}</p>
                <p className="my-3">{book.benifit3}</p>
                <p className="my-3">{book.benifit4}</p>
                <p className="my-3">{book.benifit5}</p>
                <a href="/" className="btn btn-brand w-50 mx-auto my-3" > Order Now  </a>
            </div>
        </div>
    );
};

export default MonthlyBookCard;