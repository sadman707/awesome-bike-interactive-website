import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../Hooks/useFirebase';
import './AddService.css'

const AddService = () => {
    const { user } = useFirebase();
    const { handleSubmit, register, formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://shrouded-hamlet-54967.herokuapp.com/addServices", {
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
            <div className="mb-5">
                <h1 className="text-primary text-center mt-5  ">Add Your Services Here!!!</h1>
                <div className=" w-25 mt-5 m-auto ">

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Your Name"
                                className="input-field-design p-2 m-2 w-100 "
                            />

                            <input
                                {...register("description")}
                                placeholder="Product Description"
                                className="input-field-design p-2 m-2 w-100 "
                            />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Product Image Link"
                                className="input-field-design p-2 m-2 w-100"
                            />

                            <input
                                {...register("price", { required: true })}
                                placeholder="Product Price"
                                type="number"
                                className="input-field-design p-2 m-2 w-100 "
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Add"
                                className="btn btn-warning w-25"
                            />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default AddService;