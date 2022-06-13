import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './MyServices.css'

const MyServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://shrouded-hamlet-54967.herokuapp.com/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
        console.log(services);
    }, []);
    return (
        <div>
            <h2>My Bike Services</h2>
            <div className="container">
                <div className="row container">

                    {services.map((service, index) =>
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-4 border border m-2">
                                <div className="service-img">
                                    <img className="w-75" src={service?.image} alt="" />

                                </div>
                                <h1>{service.name}</h1>
                                <p>Description:{service.description}</p>
                                <p>Price: ${service.price}</p>


                                <Link to={`/services/${service._id}`}><button className="btn btn-primary">Buy Now</button></Link>

                            </div>
                        </div>)}


                </div>
            </div>

        </div >
    );
};

export default MyServices;