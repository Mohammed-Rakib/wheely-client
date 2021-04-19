import React from 'react';
import './HeaderMain.css'
import thumb from '../../../image/thumb-2.jpg'

const HeaderMain = () => {
    return (
        <div className="header-main container my-5">
            <div className="row mb-5">
            <div className="col-lg-6">
            <div className="p-2 header-context">
                <h5  >We Make Customs Wheel</h5>
                <h1 className="mb-md-5 mb-0 ">Wheel Repair <br/> With Expert Team</h1>
                <p className="para-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Id quo, dolorum sit repudiandae numquam repellat,<br/> aut quidem amet, nam consectetur omnis! Optio ratione dolorem aspernatur?</p>
                <a className="btn btn-brand" href="/">Read More details</a>
            </div>
            </div>
            <div className="col-lg-6">
                <img src='https://detroitwheelandtire.com/pub/media/wysiwyg/cms-page/Inspection.jpg' className="img-fluid"alt=""/>
            </div>
            </div>
        </div>
    );
};

export default HeaderMain;