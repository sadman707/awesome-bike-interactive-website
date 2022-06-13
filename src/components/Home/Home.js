import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyServices from '../MyServices/MyServices';

import './Home.css'

const Home = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch("https://shrouded-hamlet-54967.herokuapp.com/getReview")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setReview(data)
            });
        console.log(review);
    }, []);


    return (
        <div className="background-color-home">

            <Banner></Banner>
            <MyServices></MyServices>
            <div className="mb-5 container">
                <div className="mt-5 mb-2 p-3">
                    <h2>Here are Reviews</h2>
                </div>
                <div className="bg-warning ">
                    {
                        review.map(reviews => (

                            <div className="row container mt-1">

                                <div className="col-md-6 col-lg-6 ">
                                    <h5>{reviews.email}</h5>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <h5>{reviews.comments}</h5>
                                </div>






                            </div>
                        ))
                    }
                </div>

            </div>
            <About></About>
            <Contact></Contact>

        </div>
    );
};

export default Home;