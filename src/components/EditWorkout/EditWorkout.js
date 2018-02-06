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
            dropdown: null, //hidden on select value
            tableName: '',
            lift: '',
            dropdown2: [],
            liftUpdate: '',
            selectedId: ''
        }
        this.selectChange = this.selectChange.bind(this);
        this.textChange = this.textChange.bind(this);
        this.showActiveRest = this.showActiveRest.bind(this);
        this.updateWorkoutText = this.updateWorkoutText.bind(this);
        // this.updateWorkout = this.updateWorkout.bind(this);
        this.submitChanges = this.submitChanges.bind(this);
        this.addLift = this.addLift.bind(this);
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
    };

    showCreateDiv() {
        this.setState({ create: true })
    };

    showModifyDiv() {
        this.setState({ modify: true })

    };

    reset() {
        this.setState({
            create: null,
            modify: null
        })
    };

    addLift(e) {
        console.log(e)
        e.preventDefault();
        var name = this.state.tableName;
        var body = { active: this.state.lift };
        console.log(body);
        switch (name) {
            case 'active_rest':
                axios.put('/api/lift1', body).then(({ body }) => {
                    this.props.history.push('/adminprofile');
                });
                break;
            case 'chest_back':
                axios.put('/api/lift2', body).then(({ body }) => {
                    this.props.history.push('/adminprofile');
                });
                break;
            case 'legs_bis':
                axios.put('/api/lift3', body).then(({ body }) => {
                    this.props.history.push('/adminprofile');
                });
                break;
            case 'legs_tris_shoulders':
                axios.put('/api/lift4', body).then(({ body }) => {
                    this.props.history.push('/adminprofile');
                });
                break;
        }
    };

    selectChange(e) {
        this.setState({
            tableName: e.target.value
        })
    };

    textChange(e) {
        this.setState({
            lift: e.target.value
        })
    };

    showActiveRest(e) {
        let value = this.state.selectedId
        this.setState({selectedId: e.target.value})
        switch (value) {
            case 'activeRest':
                this.setState({
                    dropdown2: this.state.activeRest,
            })
            break;
            case 'legsBis': 
                this.setState({
                    dropdown2: this.state.legsBis,
                })
            break;
            case 'chestBack':
                this.setState({
                    dropdown2: this.state.chestBack,
            })
            break;
            case 'legsTri':
                this.setState({
                    dropdown2: this.state.legsTri,
            })
        }
        this.setState({
            dropdown: true
        })
        console.log(this.state.dropdown2);
        console.log(this.state.dropdownID)
    };

    updateWorkoutText(e) {
        this.setState({
            liftUpdate: e.target.value
        })
    }

    updateWorkout(e) {
        console.log(e.target.value);
        this.setState({dropdownID: e.target.value});
    }

    submitChanges() {
        let id = this.state.dropdown2.id
        let updateBody = this.state.liftUpdate;
        let whichWorkout = this.state.selectedId;
        console.log(this.state.dropdown2)
         switch (whichWorkout) {
             case 'activeRest': 
             axios.post('/api/updateAct', id, updateBody).then(
                window.alert("You have successfully made a change"));
             break;
             case 'legsBis':
             axios.post('/api/updateBis',id, updateBody).then(
                window.alert("You have successfully made a change"));
             break;
             case 'chestBack': 
             axios.post('/api/updateChest', id, updateBody).then(
                window.alert("You have successfully made a change"));
             break;
             case 'legsTri':
             axios.post('/api/updateTri', id, updateBody).then(
                window.alert("You have successfully made a change"));
         }
    }

    render() {
        let mappedWo = this.state.dropdown2.map( (val, i) => {
            return <option key={i} value={val.id}>{val.workout}</option>
        })
        return (
            <div className="edit-wo">
                <div className="button-container">
                    <button onClick={() => this.showCreateDiv()}>Create New Lift</button>
                    <button className="reset" onClick={() => this.reset()}>Reset</button>
                    <button onClick={() => this.showModifyDiv()}>Modify Existing Lift</button>
                </div>
                <div className="input">
                    <div hidden={this.state.create == null || this.state.modify == true ? true : false} className="create-new">
                        <form className="test" onSubmit={(e) => this.addLift(e)}>
                            <select className="drop-down" onChange={this.selectChange} value={this.state.tableName}>
                                <option className="add-new-opt" selected="Select">Select</option>
                                <option className="add-new-opt" label="Active Rest" value="active_rest"></option>
                                <option className="add-new-opt" label="Legs and Biceps" value="legs_bis"></option>
                                <option className="add-new-opt" label="Chest and Back" value="chest_back"></option>
                                <option className="add-new-opt" label="Legs, Triceps, Shoulders" value="legs_tris_shoulders"></option>
                            </select>
                            <label className="first-label">
                                <textarea className="first-input" value={this.state.lift} onChange={this.textChange}></textarea>
                            </label>
                            <h6 className="instructions">Format Example: Deadlift: 5x5</h6>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <div hidden={this.state.modify == null || this.state.create == true ? true : false} className="create-new">
                        <form className="test" onSubmit={ (e) => this.submitChanges(e)}>
                            <select onChange={this.showActiveRest} value={this.state.dropdown2}>
                                <option className="add-new-opt" selected="Select">Select</option>
                                <option className="add-new-opt" label="Active Rest" value="activeRest"></option>
                                <option className="add-new-opt" label="Legs and Biceps" value="legsBis"></option>
                                <option className="add-new-opt" label="Chest and Back" value="chestBack"></option>
                                <option className="add-new-opt" label="Legs, Triceps, Shoulders" value="legsTri"></option>
                            </select>
                            <select hidden={ this.state.dropdown === null ? true : false} value={this.state.dropdownID}>
                                <option selected="Select">Select</option>
                                {mappedWo}
                            </select>
                            <label className="first-label">
                                <textarea className="first-input" onChange={this.updateWorkoutText}/>
                            </label>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

