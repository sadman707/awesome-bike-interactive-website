import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="row bg-success text-white p-3">
                    <div className="col-lg-6">
                        <p>This is all about us. For further info please contact us</p>
                        <p>Contact no: 01305504178</p>
                    </div>
                    <div className="col-lg-6">
                        <p>Copyright is reserved by THINKSYS</p>
                        <span>Sign up now!!</span>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;