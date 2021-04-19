import React from 'react';
import about from '../../../image/about.png'

const About = () => {
    return (
        <div id="about" className="container my-5 ">
            <div className="row">
            <div className="col-md-6">
                <img src={about } className="img-fluid" alt=""/>
            </div>
            <div className="col-md-6 mt-lg-5 mt-1">
                <h5 className="mt-lg-5 mt-0">Do You Know Us?</h5>
                <h1 className="my-lg-3 mt-0 ">We are qualified for <span className="simple-text">services</span> </h1>
                <p className="para-text">Professionally aggregate equity invested ideas without high-quality relationships. Globally negotiate tactical initiatives whereas magnetic platforms. Collaboratively syndicate sticky opportunities without resource........</p>
                <a href="/" className="btn btn-brand ">Contact Us</a>
            </div>
            </div>
        </div>
    );
};

export default About;