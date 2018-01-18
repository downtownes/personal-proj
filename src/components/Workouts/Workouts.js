import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Nav from '../NavBar/Nav';
import routes from '../../routes';
import './Workouts.css';

export default class Workouts extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="workouts">
                    <h4 className="titles">Build Muscle</h4>
                    <h4 className="titles">Burn Fat</h4>
                </div>
                <div className="links-div">
                    <div className="workout-links">
                        <Link to="/workouts/muscle"><img src="http://via.placeholder.com/300x300" alt="muscular man" /></Link>
                    </div>
                    <div className="workout-links">
                        <Link to="/workouts/fat"><img src="http://via.placeholder.com/300x300" alt="running man" /></Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}