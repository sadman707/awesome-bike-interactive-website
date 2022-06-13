import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MangeOrder = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    console.log(status);
    useEffect(() => {
        fetch("https://shrouded-hamlet-54967.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://shrouded-hamlet-54967.herokuapp.com/statusUorderate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    return (
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Service Name</th>
                        <th>Service description</th>
                        <th>Image Link</th>

                    </tr>
                </thead>
                {orders?.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{order.name}</td>
                            <td>{order.description}</td>
                            <td>{order.image}</td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MangeOrder;