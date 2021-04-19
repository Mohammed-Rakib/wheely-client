import React from 'react';
import './Footer.css';
import thumb1 from '../../../image/thumb-2.jpg';
import thumb2 from '../../../image/thumb-2-1.jpg'
import { FcCalendar } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im';
import { AiFillYoutube } from 'react-icons/ai';
import FooterPost from './FooterPost';

const footerPost = [
    {
        image:thumb1,
        date:"21 Mar, 2021",
        description:"Some claim lorem ipsum thre atens to promote process",
        icon:<FcCalendar/>
    },
    {
        image:thumb2,
        date:"25 Apr, 2021",
        description:"Cool features in top 10 car sir vices, Most of cus",
        icon:<FcCalendar/>
    }
]
const Footer = () => {
    return (
        <div className="mt-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <h2 className="my-3">About Company</h2>
                        <hr className="horrizontal-role"/>
                        <p>Conveniently integrate proactive resources after flexible total linkage. Globally reintermediate unique value with client-centric interfaces. Holisticly repurposee.</p>
                        <button className="btn btn-brand my-3">View Map</button>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h2 className="my-3">Recent Posts</h2>
                        <hr className="horrizontal-role"/>
                        {
                            footerPost.map(post => <FooterPost post={post} key={post.image}></FooterPost> )
                        }
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <h2 className="my-3">Connect With Us</h2>
                    <hr className="horrizontal-role"/>
                    <p className="para-text my-2">Sign Up Now & Get 10% Off!</p>
                    <div className="row my-3">
                        <div className="col-md-8 w-100">
                            <input className="form-control w-100" placeholder="Your Email Address" type="text"/>
                        </div>
                        <div className="col-md-4 w-100">
                        <button className="btn btn-danger w-100">Subscribe</button>
                        </div>
                    </div>
                    <h3 className="mt-3">Follow On: </h3>
                    <FaFacebookF className="facebook"/> <ImTwitter className="twitter"/> <ImLinkedin2 className="linkedIn"/> <AiFillYoutube className="youtube"/>
                    </div>
                </div>
            </div>
            <p className="text-center p-3">Copyright &copy;  2021 Wheely.All rights reserved byVecuro.</p>
        </div>
    );
};

export default Footer;