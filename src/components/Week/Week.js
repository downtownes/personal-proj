import React, { Component } from 'react';
import axios from 'axios';

export default class Week extends Component {
    constructor(){
        super();
        this.state = {
            week: []
        }
    }

    componentWillMount() {
        axios.get('/api/week')
    }
    render(){
        return(
            <div>
                {this.state.week}
            </div>
        )
    }
}