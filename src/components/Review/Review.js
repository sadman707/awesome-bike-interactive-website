import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../Hooks/useFirebase';

const Review = () => {
    const { register, handleSubmit } = useForm();

    const { user } = useFirebase();

    const onSubmit = (data) => {

        fetch("https://shrouded-hamlet-54967.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
    };
    return (
        <div>
            <h2>Please put your reviews</h2>
            <form className="overall-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="register-field-design"
                    name="email"
                    placeholder="Enter your Email"
                    // value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="register-field-design"
                    name="comments"
                    type="text"
                    placeholder="comments"
                    {...register("comments", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-warning mt-3 mb-5"
                    type="submit"
                    value="Submit"
                />
            </form>

        </div>
    );
};

export default Review;