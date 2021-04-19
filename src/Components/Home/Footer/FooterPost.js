import React from 'react';

const FooterPost = ({post}) => {
    return (
        <div className="row my-3">
            <div className="col-md-4 d-flex align-items-center">
                <img src={post.image} alt=""/>
            </div>
            <div className="col-md-8 text-left">
                <p> {post.icon} {post.date}</p>
                <h6>{post.description}</h6>
            </div>
        </div>
    );
};

export default FooterPost;