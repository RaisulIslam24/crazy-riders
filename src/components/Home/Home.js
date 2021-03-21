import React from 'react';
import data from '../../data/data.json'
import Ride from '../Ride/Ride';
import './Home.css'

const Home = () => {
    return (
        <div className='d-flex flex-row justify-content-around p-5'>
            {
                data.map(data => <Ride key={data.rideType} data={data}></Ride>)
            }
        </div>
    );
};

export default Home;