import React from 'react';
import './Contact.css'
import myImage from '../../Asset/myimage.jpg'
import chiefimage from '../../Asset/Chief.png'
const Contact = () => {
    return (
        <div>
            <div>

                <h1 className='p-3 text-success'>Contact Us</h1>
            </div>
            <div className='container'>
                <div className=" row py-5 px-2 ms-3">

                    <div className="col-md-6 row-style fw-bold shadow">

                        <img className='imageThumbnail' src={chiefimage} alt="" />
                        <h3>Md.Tonoy Kaushik</h3>
                        <p>Designation: Chief Information Officer
                        </p>
                        <p>
                            Address: Habiba cottage, house 51 road 3,Block A, Mohammadpur
                        </p>

                        <span>Phone: 01305504178</span>
                        <p>Email: tonoysystem@gmail.com</p>
                    </div>
                    <div className="col-md-6 row-style ms-5 fw-bold shadow">

                        <img className='imageThumbnail' src={myImage} alt="" />
                        <h3>Md. Sadman Sakib</h3>
                        <p>
                            Designation: Deputy Manager,Software sales and Development

                        </p>
                        <p className='px-2'>
                            Address: Block E, road 9/3, house 111, South Bonosree.
                        </p>
                        <span>Phone: 01907436684</span>
                        <p>Email: sadman.sakib787@gmail.com</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;