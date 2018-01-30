import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../MuscleWorkout/MuscleWorkout.css';


export default class BurnFat extends Component {
    constructor() {
        super();
        this.state = {
            burnWorkout: [],
            week: []
        }
    }

    componentDidMount() {
       axios.get('/api/fatburn').then(res => {
            this.setState({
                burnWorkout: res.data
            })
        })
    }
    render() {
        let loseWeight = this.state.burnWorkout.map((week, i) => {
            return <tr>
                <Link to={`/burnweek/${i}`}><td>{i+1}</td></Link>
                <td>{week.sunday}</td>
                <td>{week.monday}</td>
                <td>{week.tuesday}</td>
                <td>{week.wednesday}</td>
                <td>{week.thursday}</td>
                <td>{week.friday}</td>
                <td>{week.saturday}</td>
            </tr>
        })
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
                        {loseWeight}
                        {console.log(this.state.week)}
                    </tbody>
                </table>
            </div>
        )
    }
}