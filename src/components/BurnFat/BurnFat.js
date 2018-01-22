import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BurnFat.css';


export default class BurnFat extends Component {
    constructor() {
        super();
        this.state = {
            burnWorkout: [],
            week: []
        }
    }

    componentDidMount() {
        axios.all([axios.get('/api/fatburn'), axios.get('/api/week')]).then(res => {
            this.setState({
                burnWorkout: res[0].data,
                week: res[1].data
            })
        })
    }
    render() {
        let loseWeight = this.state.burnWorkout.map(week => {
            return <tr>
                <td><Link to="/workout/week">{week.sunday}</Link></td>
                <td><Link to="/workout/week">{week.monday}</Link></td>
                <td><Link to="/workout/week">{week.tuesday}</Link></td>
                <td><Link to="/workout/week">{week.wednesday}</Link></td>
                <td><Link to="/workout/week">{week.thursday}</Link></td>
                <td><Link to="/workout/week">{week.friday}</Link></td>
                <td><Link to="/workout/week">{week.saturday}</Link></td>
            </tr>
        })
        return (
            <div className="burn-fat">
                <h1>8 Week Fat Shredder</h1>

                <table className="burn-table">
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

                        {loseWeight}
                        {loseWeight}
                        {loseWeight}
                        {loseWeight}
                        {loseWeight}
                        {loseWeight}
                        {loseWeight}
                        {loseWeight}
                    </tbody>
                </table>
            </div>
        )
    }
}