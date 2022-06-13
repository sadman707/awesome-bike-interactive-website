import React, { useEffect } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const MyBookings = () => {

    const { user } = useFirebase();
    useEffect(() => {
        fetch(`https://shrouded-hamlet-54967.herokuapp.com/myOrder/${user?.email}`)
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