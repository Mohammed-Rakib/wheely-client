import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import CuntomerReview from '../CustomarReview/CuntomerReview';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MonthlyBook from '../MonthlyBook/MonthlyBook';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <MonthlyBook></MonthlyBook>
            <CuntomerReview></CuntomerReview>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;