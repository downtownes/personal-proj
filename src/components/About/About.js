import React, { Component } from 'react';
import './About.css';


export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="trainer-container">
                    <div className="img-div">
                        <img src="http://via.placeholder.com/300x500" />
                    </div>
                    <div className="info-container">
                        <h3>Antonio Meikel</h3>
                        <p>Phasellus vel mi euismod, fringilla eros non, consectetur nisi. Curabitur gravida semper mauris sed sollicitudin. Aenean iaculis velit nec arcu hendrerit efficitur. Maecenas ipsum enim, lobortis ut tempor vitae, mattis congue eros. Etiam a risus efficitur, vestibulum nibh a, finibus lacus. Mauris rhoncus tellus quis justo semper, vel convallis dolor suscipit. Duis facilisis blandit felis quis maximus. Duis sem neque, fringilla eu hendrerit a, tempus eget nisi. Vivamus aliquet nisi euismod ex vulputate molestie. Duis id quam vel mauris pretium tristique.</p>
                    </div>
                </div>
                <div className="break-div">
                    </div>
            </div>
        )
    }
}