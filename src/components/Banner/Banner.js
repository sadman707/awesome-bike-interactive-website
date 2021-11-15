import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="header-container mt-3 mb-3">
            <div className="header-image">
                <img src="https://i.ibb.co/n0qMbBc/henry-dick-96yg-TTckk3-E-unsplash.jpg" alt="" />
                {<div className="header-text">
                    <h1 className="h1-font-color">Welcome to My Bike World!!!</h1>
                    <h2 className="h2-font-color">You will be fully satisfied</h2>
                    <h1 className="h1-font-color">100% Satisfaction</h1>
                </div>}
            </div>
        </div>
    );
};

export default Banner;