import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users';
import Nav from '../NavBar/Nav';
import routes from '../../routes';
import '../Home/Home.css'

class Home extends Component {

    componentDidMount(){
        this.props.getUserInfo
    }
    render() {
        const user = this.props.user;
        return (
            <div className="home">
                <div className="title-div">
                    <h1>5' GIANT LIFTING</h1>
                </div>
                <div className="middle">
                    <div className="middle-icon1">
                    </div>
                    <Link to={!user.username ? "/" : "/profile"} className="profile-link"><div className="middle-icon2">
                    </div></Link>
                </div>

                <p>Aliquam porttitor mauris vel feugiat tincidunt. Sed ut diam eget orci porttitor porttitor. Donec nisi libero, dignissim eget feugiat ut, porta sed magna. Donec eu dolor non velit fermentum ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus semper lectus massa, a tristique tellus hendrerit ac. Nam molestie ultricies enim ut consectetur. In hac habitasse platea dictumst. Proin risus tellus, ultricies vel ultricies et, elementum et leo. Proin congue dignissim ex at porttitor. Integer laoreet dolor eget lectus iaculis ornare ac sed nisi. Fusce fringilla condimentum neque, id faucibus urna scelerisque id. Nulla facilisi. Curabitur tincidunt est quam, eget faucibus nunc interdum quis. Sed vitae ligula in ipsum aliquet cursus. Fusce risus velit, gravida vitae dolor eget, euismod accumsan nisi.</p>
            </div>
        )
    }
}

function mapStateToProps(state){

    return {user: state.user
    }
}

export default connect(mapStateToProps)(Home);