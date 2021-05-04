import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
import "./todo.css";

class Todo extends Component {
    state = {
        todoText: "",
        todoList: []
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Pending To-Dos</h3>
                    <h6>You have: {this.props.todoItems.length} pending To-Dos</h6>
                    <input
                        value={this.state.todoText}
                        onChange={this.onTextChange}
                        placeholder="Todo text" type="text"></input>
                    <button onClick={this.addTodoClicked}>Add</button>
                </div>
                <div className="toDoList">
                    {this.props.todoItems.map((t, index) => (
                    <div key={index}>
                    <li className="list-item">{t}
                    <button 
                    onClick={() => { this.removeTodo(index) }}
                        className="delete-btn btn btn-info btn-sm">Remove</button></li>
                    </div>
                    ))}
                </div>
            </div>
        );
    }

    onTextChange = (event) => {
        this.setState({ todoText: event.target.value });
    }

    addTodoClicked = () => {
        var copy = [...this.state.todoList];
        copy.push(this.state.todoText);
        // dispatch action
        this.props.addTodo(this.state.todoText);

        this.setState({ todoText: "" });
        console.log("New todo added");

    }

    removeTodoByText = (todoText) => {
        var copy = [...this.state.todoList.filter(e => e !== todoText)];
        this.setState({todoList: copy});
    }

    removeTodo = (index) => {
        var copy = [...this.state.todoList];
        copy = copy.splice(index, 1);
        this.setState({ todoList: copy });
    }
}

const mapStateToProps = (state) => {
    return {
        todoItems: state
    }
};

export default connect(mapStateToProps, {addTodo})(Todo);
