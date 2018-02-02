import React, { Component } from 'react';
import axios from 'axios';
import './Week.css';

export default class Week extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRest: [],
            legsBis: [],
            chestBack: [],
            legsTris: []
        }
    }

    componentDidMount() {
        axios.all([axios.get('/api/active_rest'), axios.get('/api/chest_back'), axios.get('/api/legs_bis'), axios.get('/api/legs_tris')]).then(res => {
            this.setState({
                activeRest: res[0].data,
                chestBack: res[1].data,
                legsBis: res[2].data,
                legsTris: res[3].data
            })
        })
    }


    render() {
        // let weekSplit = this.state.week.map( (val, i) => {
        //     split = val.wo_details.split(',');
        //     return <tr>
        //         <td>{val.wo_name}</td>
        //         <td>{split.map((wo) => {
        //             return <div className="pic-div">{wo}<h4>What is this?</h4></div>
        //         })}<div>
        //             <div></div>
        //             </div>
        //             </td>
        //     </tr>
        // });
        return (
            <div className="week">
                <table className="week-table">
                    <tbody>
                            <th className="day-wo">Day</th>
                            <th className="day-wo">Workout</th>
                        {/* {weekSplit} */}
                    </tbody>
                </table>
            </div>
        )
    }
}
