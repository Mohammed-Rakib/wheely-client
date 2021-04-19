import React from 'react';
import MonthlyBookCard from './MonthlyBookCard';

const monthlyBooks = [
    {
        title:'Basic',
        monthlyCost:'27',
        benifit1:'Backup power',
        benifit2:'Celling fan installation',
        benifit3:'Circuit breaker replacement',
        benifit4:'Code compliance',
        benifit5:'Breaker Panel Upgrades'
    },
    {
        title:'Standard',
        monthlyCost:'59',
        benifit1:'Backup power',
        benifit2:'Celling fan installation',
        benifit3:'Circuit breaker replacement',
        benifit4:'Code compliance',
        benifit5:'Breaker Panel Upgrades'
    },
    {
        title:'Advanced',
        monthlyCost:'99',
        benifit1:'Backup power',
        benifit2:'Celling fan installation',
        benifit3:'Circuit breaker replacement',
        benifit4:'Code compliance',
        benifit5:'Breaker Panel Upgrades'
    }
]

const MonthlyBook = () => {
    return (
        <div className="container my-5">
            <br/><br/>
            <div className="text-area w-75">
                <h3 className="simple-text my-lg-4 my-2">Do You Know Us?</h3>
                <h1 className="my-lg-3 my-2">Just Make An Awesome</h1>
                <p className="para-text " >Interactively promote team driven expertise for competitive process improvements. Progressively leverage other's resource sucking functionalities via timely niche markets. Enthusiastically optimize functionalized models through proactive models.</p>
            </div>
            <div className="row">
                {
                    monthlyBooks.map(book => <MonthlyBookCard book={book} key={book.title}></MonthlyBookCard> )
                }
            </div>
        </div>
    );
};

export default MonthlyBook;