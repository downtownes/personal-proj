import React, { Component } from 'react';
import axios from 'axios';
import './BurnWeek.css';

export default class Week extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week: [],
            weeksDisp: ''
        }
    }

    componentDidMount() {
        axios.get('/api/burnweek').then(res => {
            console.log(res.data)
            this.setState({
                week: res.data
            })
        })
    }


    render() {
        let split;
        let name;
        let lift;
        let weekSplit = this.state.week.map( (val, i) => {
            split = val.wo_details.split(',');
            console.log(split);
            return <tr>
                <td>{val.wo_name}</td>
                <td>{split.map((wo) => {
                    return <div className="pic-div">{wo}<h4>What is this?</h4></div>
                })}<div>
                    <div></div>
                    </div>
                    </td>
            </tr>
        });
        return (
            <div className="week">
                <table className="week-table">
                    <tbody>
                            <th className="day-wo">Day</th>
                            <th className="day-wo">Workout</th>
                        {weekSplit}
                    </tbody>
                </table>
            </div>
        )
    }
}
