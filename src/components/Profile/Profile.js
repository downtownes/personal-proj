import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUserInfo } from '../../ducks/users';
import './Profile.css';

class Profile extends Component {

    componentDidMount() {

        axios.get('/auth/authorized').then(user => {
            if (!user) {
                this.props.history.push('/')
            } else {
                this.props.history.push('/adminprofile')
            }
        })
        this.props.getUserInfo();
    }
    render() {
        console.log(this.props);
        const user = this.props.user;
        return (
            <div className="profile">
                <div className="welcome"><h1>Welcome {user.username}</h1></div>
                <div className="profile-info">
                <div className="profile-pitcha">{user ? <img className='avatar' src={user.email} width={200} height={200} mode='fit'/> : null}</div>
                    <p>Username: {user ? user.username : null}</p>
                    <p>ID: {user ? user.auth_id : null}</p>
                </div>
                <a href='http://localhost:3000/auth/logout'><button>Log Out!</button></a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);