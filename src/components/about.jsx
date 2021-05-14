import React, { Component } from 'react';
import "./about.css";

class About extends Component {
    state = {
        email: "Show"
    }
    render() {
        return (
            <div>
                <h2>About us</h2>

                <h3>Please email us at <button onClick={this.showContactInfo} className="btn-contact btn btn-info btn-primary">{this.state.email}</button> with any issues, comments, or complaints.</h3>
            </div>
        );
    }

    showContactInfo = () => {
        console.log("Show email");
        this.setState({ email: "email@etc.com" })
    }

}

export default About;