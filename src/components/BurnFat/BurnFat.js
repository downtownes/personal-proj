import React, { Component } from 'react';
import axios from 'axios';
import './BurnFat.css';


export default class BurnFat extends Component {
    constructor() {
        super();
        this.state = {
            burnWorkout: []
        }
    }

    componentDidMount() {
        axios.get('/api/fatburn').then(res => {
            this.setState({ burnWorkout: res.data })
        })
    }
    render() {
        let loseWeight = this.state.burnWorkout.map(week => {
            return <tr>
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
                    </tbody>
                </table>
            </div>
        )
    }
}