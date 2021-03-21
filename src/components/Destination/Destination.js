import React, { useState } from 'react';
import { useParams } from 'react-router';
import data from '../../data/data.json'
import './Destination.css'

const Destination = () => {
    const { rideType } = useParams();
    const ride = data.find(ride => ride.rideType == rideType);
    const [rideShow, setRideShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRideShow(!rideShow)
    }

    return (
        <div className="container d-flex flex-row">
            <div className="container d-flex flex-column w-75">
                {!rideShow && (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='border w-50 h-75 m-3 mr-5 p-4 rounded bg-light shadow'>
                                <h5>Pick From</h5>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control" required />
                                </div>
                                <h5>Pick To</h5>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control" required />
                                </div>
                                <input type="submit" value="Search" className="form-control bg-danger text-white w-100"></input>
                            </div>
                        </div>
                    </form>
                )}
                <div>
                    {rideShow && (
                        <div className='border p-1 w-50 shadow bg-success rounded'>
                            <div className="border mt-3 mr-3 bg-danger text-white text-left p-3 ml-3 rounded">
                                <h5>Mirpur 1</h5>
                                <h5>Dhanmondi</h5>
                            </div>
                            <div className='d-flex flex-row border m-3 p-3 rounded bg-light'>
                                <img className="image" src={ride.img} alt="" />
                                <p className="name">{ride.rideType}</p>
                                <img className="image1 ml-3" src={'https://i.ibb.co/8jp2pTf/peopleicon.png'} alt="" />
                                <p>4</p>
                                <p className="name">$67</p>
                            </div>
                            <div className='d-flex flex-row border m-3 p-3 rounded bg-light'>
                                <img className="image" src={ride.img} alt="" />
                                <p className="name">{ride.rideType}</p>
                                <img className="image1 ml-3" src={'https://i.ibb.co/8jp2pTf/peopleicon.png'} alt="" />
                                <p>4</p>
                                <p className="name">$67</p>
                            </div>
                            <div className='d-flex flex-row border m-3 p-3 rounded bg-light'>
                                <img className="image" src={ride.img} alt="" />
                                <p className="name">{ride.rideType}</p>
                                <img className="image1 ml-3" src={'https://i.ibb.co/8jp2pTf/peopleicon.png'} alt="" />
                                <p>4</p>
                                <p className="name">$67</p>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
            <div className='ml-5'>
                <img style={{ width: '100%' }} src={'https://i.ibb.co/5Tr3QQk/Map.png'} alt="" />
            </div>
        </div>
    );
};

export default Destination;