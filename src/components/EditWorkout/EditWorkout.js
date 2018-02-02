import React, { Component } from 'react';
import axios from 'axios';
import './EditWorkout.css';


export default class EditWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRest: [],
            legsBis: [],
            chestBack: [],
            legsTri: [],
            create: null,
            modify: null,
            tableName: '',
            lift: ''
        }
        this.selectChange = this.selectChange.bind(this);
        this.textChange = this.textChange.bind(this);
    }

    componentDidMount() {
        axios.all([axios.get('/api/active_rest'), axios.get('/api/chest_back'), axios.get('/api/legs_tris'), axios.get('/api/legs_bis')]).then(res => {
            this.setState({
                activeRest: res[0].data,
                legsBis: res[3].data,
                chestBack: res[1].data,
                legsTri: res[2].data,
            })
        })
    }

    showCreateDiv() {
        this.setState({ create: true })
    }

    showModifyDiv() {
        this.setState({ modify: true })
    }

    reset() {
        this.setState({
            create: null,
            modify: null
        })
    }

    addLift(e) {
        console.log(e)
        e.preventDefault();
        var name = this.state.tableName;
        var body = this.state.textarea;
        axios.post('/api/lift', name, body).then(newWorkout => {
            console.log(newWorkout);
        })
    }

    selectChange(e) {
        this.setState({
            tableName: e.target.value
        })
    }

    textChange(e){
        this.setState({
            lift: e.target.value
        })
    }


    render() {
        console.log(this.state);
        // let indivWo = this.state.workouts.map((wo, i) => {
        //     console.log(wo)
        //     return <form key={wo.id} onSubmit={ () => this.handleChange(wo.id, this.state.workouts[wo.id].wo_details)}>
        //         <label>
        //             <input className="input-box" type="text" value={this.state.workouts[i].wo_details} 
        //             onChange={e => this.changeState(e.target.value, wo.id)}/>
        //         </label>
        //         <input type="submit" value="Submit" />
        //     </form>
        // })

        return (
            <div className="edit-wo">
                <div className="button-container">
                    <button onClick={() => this.showCreateDiv()}>Create New Lift</button>
                    <button className="reset" onClick={() => this.reset()}>Reset</button>
                    <button onClick={() => this.showModifyDiv()}>Modify Existing Lift</button>
                </div>
                <div className="input">
                    <div hidden={this.state.create == null || this.state.modify == true ? true : false} className="create-new">
                        <form className="test" onSubmit={ (e) => this.addLift(e)}>
                            <select className="drop-down" onChange={this.selectChange} value={this.state.tableName}>
                                <option className="add-new-opt" selected="Select">Select</option>
                                <option className="add-new-opt" label="Active Rest" value="active_rest"></option>
                                <option className="add-new-opt" label="Legs and Biceps" value="legs_bis"></option>
                                <option className="add-new-opt" label="Chest and Back" value="chest_back"></option>
                                <option className="add-new-opt" label="Legs, Triceps, Shoulders" value="legs_tris_shoulders"></option>
                            </select>
                            <label className="first-label">
                                <textarea className="first-input"  value={this.state.lift} onChange={this.textChange}></textarea>
                            </label>
                            <h6 className="instructions">Format Example: Deadlift: 5x5</h6>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <div hidden={this.state.modify == null || this.state.create == true ? true : false} className="create-new">
                        <form className="test">
                            <label className="first-label">
                                <textarea className="first-input"  />
                            </label>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

