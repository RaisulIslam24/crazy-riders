import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light mb-5">
                <div class="container-fluid">
                        <Link className="header" to="/home"><strong>Crazy Riders</strong></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <li>
                                <Link className="header" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="header" to="/login">Destination</Link>
                            </li>
                            <li>
                                <Link className="header" to="/home">Blog</Link>
                            </li>
                            <li>
                                <Link className="header" to="/home">Contact</Link>
                            </li>
                            <li>
                                <Link className="header" to="/login">
                                    {loggedInUser.displayName || loggedInUser.displayName || loggedInUser.name || <button className="btn btn-danger btn-sm">Login</button>}
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;