import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';
import './ProductDetails.css'

const ProductDetails = (data) => {
    const [service, setService] = useState({});
    const { user } = useFirebase();
    const { serviceId } = useParams();



    // const { handleSubmit, reset, register, watch, formState: { errors },
    // } = useForm();

    /*  const onSubmit = (data) => {
         // data.email = "sadman sakib"
         fetch("https://shrouded-hamlet-54967.herokuapp.com/addServices", {
             method: "POST",
             headers: { "content-type": "application/json" },
             body: JSON.stringify(data),
         })
             .then((res) => res.json())
             .then((result) => console.log(result));
 
         console.log(data);
     }; */

    const handlePlaceOrder = e => {
        const data = {
            name: service?.name,
            description: service?.description,
            price: service?.price,
            image: service?.image
        }
        data.email = user?.email;
        fetch("https://shrouded-hamlet-54967.herokuapp.com/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);

    }

    useEffect(() => {
        fetch(`https://shrouded-hamlet-54967.herokuapp.com/singleService/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div>
            <h2>Purchase Your Product </h2>
            <div className="row container m-5">

                <div className="col-md-6 col-lg-6 mb-6 ">

                    <div>
                        <img className="w-50 " src={service?.image} alt="" />

                    </div>
                    {<div>
                        <h1>Your Product Name: {service.name}</h1>
                        <h2>Price: ${service?.price}</h2>
                    </div>}

                </div>

                <div className="col-md-6 col-lg-6 bg-warning">
                    <div>
                        <div>
                            <h4>Product Name: ${service?.name}</h4>
                        </div>
                        <div>
                            <p className='fontSize'>description: ${service?.description}</p>
                        </div>
                        <div>
                            <h4>price: ${service?.price}</h4>
                        </div>
                        <button className="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;