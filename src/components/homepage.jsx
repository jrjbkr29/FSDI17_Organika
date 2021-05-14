import React, { Component } from 'react';
import { connect } from "react-redux";
import { clearTodos } from "../store/actions";

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2>Welcome to our store</h2>
                <img src="../../home.jpg" alt="Img of store" style={{ width: "60vw" }} />
            </div>
        );

    }

    clearTodos = () => {
        console.log("ClearTodos Clicked")
        this.props.clearTodos()
    }

}
const mapStateToProps = (state) => {
    return {
        todoItems: state
    }
};

export default connect(mapStateToProps, { clearTodos })(HomePage);
//export default HomePage;