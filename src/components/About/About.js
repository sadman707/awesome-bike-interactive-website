import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="carousel-style">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <h1 className="font-style">About Us</h1>
                        <h3 className="font-style">You Will Get The Best Service!!!</h3>
                        <img src="https://i.ibb.co/PTzk3cj/aboutUs.jpg" className="d-block w-100" alt="carousel-1"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/946rWsv/2.jpg" className="d-block w-100" alt="carousel-2"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/FbfvMZy/Ai.jpg" className="d-block w-100" alt="carousel-3"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default About;