import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Please send an email and we can chat about any project you have in mind</h2>
                <button onClick={this.showContactInfo} className="btn btn-info btn-primary">Show email</button>
            </div>
         );
    }

    showContactInfo() {
        console.log("Show email");
    }

}
 
export default About;