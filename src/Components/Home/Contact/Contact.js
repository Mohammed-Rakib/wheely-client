import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="container my-5 ">
            <h1 className="simple-text text-center">Contact Us</h1>
            <div className="text-center">
                <hr className=" horrizontal"/>
            </div>
            <input type="text" placeholder="Enter Your Email" className="form-control my-3 p-4"/>
            <input type="text" placeholder="Enter Your Phone" className="form-control my-3 p-4"/>
            <textarea className="form-control " placeholder="Message....."  rows="4"></textarea>
            <button className="btn-brand my-3 ">Submit</button>
        </div>
    );
};

export default Contact;