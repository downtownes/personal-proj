import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
            console.log(this.props);
            console.log(res.data);
            this.setState({
                workout: res.data,
            })
        })
    }

    render() {
        let muscWorkout = this.state.workout.map((week, i) => {
            return <tr className="wo-rows">
                <Link className="header-data" to={`/week/${i}`}><td className="weeks">{i + 1}</td></Link>
                <td className="header-data">{week.sunday}</td>
                <td className="header-data">{week.monday}</td>
                <td className="header-data">{week.tuesday}</td>
                <td className="header-data">{week.wednesday}</td>
                <td className="header-data">{week.thursday}</td>
                <td className="header-data">{week.friday}</td>
                <td className="header-data">{week.saturday}</td>
            </tr>
        });
        return (
            <div className="muscle">
                <h1 className="build-title">8 Week Muscle Builder</h1>


                <table className="workout-table">
                    <thead className="header">
                        <tr className="head-row">
                            <th className="sched-head">Week #</th>
                            <th className="sched-head">Sunday</th>
                            <th className="sched-head">Monday</th>
                            <th className="sched-head">Tuesday</th>
                            <th className="sched-head">Wednesday</th>
                            <th className="sched-head">Thursday</th>
                            <th className="sched-head">Friday</th>
                            <th className="sched-head">Saturday</th>
                        </tr>
                    </thead>
                    <tbody className="sched-body">
                        {muscWorkout}
                        {console.log(this.state.week)}
                    </tbody>
                </table>
            </div>
        )
    }
}