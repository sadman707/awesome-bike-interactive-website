import React from 'react';
import { useForm } from 'react-hook-form';

const Admin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/makingAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <h2>Make Admin Here</h2>
            <form className="overall-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="register-field-design"
                    name="email"
                    placeholder="Enter Email to make Admin"
                    type="email"
                    {...register("email", { required: true })}
                />

                <br />

                <input
                    className="submit-btn btn btn-warning mt-3 mb-5"
                    type="submit"
                    value="Make Admin"
                />
            </form>
        </div>
    );
};

export default Admin;