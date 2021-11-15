import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Register.css'

const Register = () => {
    const { handleUserRegister } = useFirebase();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        handleUserRegister(data.email, data.password);
        console.log(data);
    };
    return (
        <div className="container ">
            <div className="register-design">
                <form className="overall-form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="register-field-design"
                        name="email"
                        placeholder="Your Email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br />
                    <input
                        className="register-field-design"
                        name="password"
                        type="password"
                        placeholder="Your Password"
                        {...register("password", { required: true })}
                    />
                    <br />

                    <input
                        className="submit-btn btn btn-warning mt-3 mb-5"
                        type="submit"
                        value="Register"
                    />
                </form>
                <p>Don't have any account</p>
                <Link className="btn btn-primary" to="/login">Log In</Link>
            </div>


        </div>
    );
};

export default Register;