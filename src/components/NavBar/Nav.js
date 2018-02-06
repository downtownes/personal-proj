import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '../../routes';
import { getUserInfo } from '../../ducks/users';
import './Nav.css';
export default class Nav extends Component {

    render() {
        return (
            <div>
                <div className="nav">
                    <div className="nav-img">
                        
                    </div>
                    <div><Link to="/" className="links"><h4 className="link-text">Home</h4  ></Link></div>
                    <div><Link to="/workouts" className="links"><h4 className="link-text">Workouts</h4></Link></div>
                    <div><Link to="/about" className="links"><h4 className="link-text">About</h4></Link></div>
                    <div className="login-link">
                    <a className="login" href={process.env.REACT_APP_LOGIN}>
                        <h4 className="link-text">Login</h4>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}