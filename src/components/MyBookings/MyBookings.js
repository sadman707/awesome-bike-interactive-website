import React, { useEffect } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const MyBookings = () => {

    const { user } = useFirebase();
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [user?.email]);
    return (
        <div>
            <h2>Here is my bookings</h2>
        </div>
    );
};

export default MyBookings;