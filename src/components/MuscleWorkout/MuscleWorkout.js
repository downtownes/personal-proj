import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './MuscleWorkout.css';

export default class MuscleWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: [],
            week: []
        }
    }


    componentDidMount() {
        axios.all([axios.get('/api/muscle'), axios.get('/api/week')]).then(res => {
            console.log(res.data)
            this.setState({ 
                workout: res[0].data,
                week: res[1].data
            })
        })
    }

    render() {
        let muscWorkout = this.state.workout.map(week => {
            return <tr>
                <td><Link to="/workout/week">{week.sunday}</Link></td>
                <td><Link to="/workout/week">{week.monday}</Link></td>
                <td><Link to="/workout/week">{week.tuesday}</Link></td>
                <td><Link to="/workout/week">{week.wednesday}</Link></td>
                <td><Link to="/workout/week">{week.thursday}</Link></td>
                <td><Link to="/workout/week">{week.friday}</Link></td>
                <td><Link to="/workout/week">{week.saturday}</Link></td>
            </tr>
        });
        return (
            <div className="muscle">
                <h1>8 Week Muscle Builder</h1>


                <table className="workout-table">
                    <tbody>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>

                        {muscWorkout}
                        {muscWorkout}
                        {muscWorkout}
                        {muscWorkout}
                        {muscWorkout}
                        {muscWorkout}
                        {muscWorkout}
                        {muscWorkout}
                        {console.log(this.state.week)}
                    </tbody>
                </table>


            </div>
        )
    }
}