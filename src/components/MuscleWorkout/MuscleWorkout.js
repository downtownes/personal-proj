import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class MuscleWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: []
        }
        this.getWorkout = this.getWorkout.bind(this);
    }


getWorkout() {
    axios.get('/api/muscle').then(res => {
        console.log(res.data)
        this.setState({user: res.data})
    })
}

    render() {
        let muscWorkout = this.state.user.map( (val, i) => {
            return <h4 key={i}>{JSON.stringify(val)}</h4>
        })
        return(
            <div className="muscle-workout">
                <h1>8 Week Muscle Builder</h1>
                <div>
                    <button onClick={ () => this.getWorkout()}>Get User</button>
                    {muscWorkout}
                </div>
            </div>
        )
    }
}