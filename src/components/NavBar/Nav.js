import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '../../routes';
import './Nav.css';
export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="nav-img">
                        <img src="http://via.placeholder.com/250x90" />
                    </div>
                    <Link to="/" className="links"><h4>Home</h4  ></Link>
                    <Link to="/workouts" className="links"><h4 >Workouts</h4></Link>
                    <Link to="/about" className="links"><h4>About</h4></Link>
                    <div className="login-link">
                    <a href={process.env.REACT_APP_LOGIN}>
                        <h4>Login</h4>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}