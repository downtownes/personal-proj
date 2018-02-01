import React, { Component } from 'react';
import axios from 'axios';
import './EditWorkout.css';


export default class EditWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        }
    }

    componentDidMount() {
        axios.get(`/api/getwos`).then(response => {
            console.log(response);
            this.setState({
                workouts: response.data
            })
        })
        this.changeState = this.changeState.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    changeState(event, id) {
        console.log(event)
        var array = this.state.workouts.map( (e, i) => {
            if(e.id === id){
                e.wo_details = event;
            } 
            return e
        })
        console.log(array)
        this.setState({
            workouts: array
        })
    }

    handleChange(i, details) {
        axios.put(`/api/updatewo/${i}&wo_details=${details}`)
    }



    render() {
        console.log(this.state);
        let indivWo = this.state.workouts.map((wo, i) => {
            console.log(wo)
            return <form key={wo.id} onSubmit={ () => this.handleChange(wo.id, this.state.workouts[wo.id].wo_details)}>
                <label>
                    <input className="input-box" type="text" value={this.state.workouts[i].wo_details} 
                    onChange={e => this.changeState(e.target.value, wo.id)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        })

        return (
            <div className="edit-wo">
                {indivWo}
            </div>
        )
    }
}

