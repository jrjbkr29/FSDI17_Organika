import React, { Component } from 'react';
import { connect } from "react-redux";
import { clearTodos } from "../store/actions";

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2>Welcome to our store</h2>
                <img src="https://github.com/jrjbkr29/FSDI17_Organika/blob/169278d26b9225a6d16e18b4a7868d94050a8cfd/home.jpg" alt="Img of store" style={{ width: "60vw" }} />
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