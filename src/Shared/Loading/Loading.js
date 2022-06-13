import React from 'react';
import loader from '../../Asset/Spinner.gif';
const Loading = () => {
    return (
        <div>
            <img src={loader} alt="spinner" />
        </div>
    );
};

export default Loading;