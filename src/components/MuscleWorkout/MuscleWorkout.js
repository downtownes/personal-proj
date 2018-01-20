import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './MuscleWorkout.css';

export default class MuscleWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: []
        }
    }


    componentDidMount() {
        axios.get('/api/muscle').then(res => {
            console.log(res.data)
            this.setState({ workout: res.data })
        })
    }

    render() {
        let muscWorkout = this.state.workout.map(week => {
            return <tr>
                <td>{week.sunday}</td>
                <td>{week.monday}</td>
                <td>{week.tuesday}</td>
                <td>{week.wednesday}</td>
                <td>{week.thursday}</td>
                <td>{week.friday}</td>
                <td>{week.saturday}</td>
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
                        {muscWorkout}
                    </tbody>
                </table>


            </div>
        )
    }
}