import React from 'react';
import { useHistory } from 'react-router';
import './Ride.css'

const Ride = (props) => {
    const {name, img, rideType} = props.data;
    const history = useHistory()

    const handleRide = (rideType) => {
        history.push(`/destination/${rideType}`);
    }

    return (
        <div onClick={() => handleRide(rideType)} className="ride m-5 border rounded shadow">
            <img src={img} alt=""/>
            <h3>{name}</h3>
        </div>
    );
};

export default Ride;