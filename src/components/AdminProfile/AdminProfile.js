import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';
import '../Profile/Profile.css';


class AdminProfile extends Component {

    componentDidMount() {
        this.props.getUserInfo();
    }
    render() {
        console.log(this.props);
        const user = this.props.user;
        return (
            <div className="admin-profile">
                <div className="welcome"><h1>Welcome Admin: {user.username}</h1></div>
                <div className="profile-info">
                    <div className="profile-pitcha">{user ? <img className='avatar' src={user.email} width={200} height={200} mode='fit' /> : null}</div>
                    <p>Username: {user ? user.username : null}</p>
                    <p>ID: {user ? user.auth_id : null}</p>
                    <div className="buttons">
                    <a href='http://localhost:3000/auth/logout'><button>Log Out</button></a>
                    <button>Edit Workout</button>
                    </div>
                </div>
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

export default connect(mapStateToProps, { getUserInfo })(AdminProfile);