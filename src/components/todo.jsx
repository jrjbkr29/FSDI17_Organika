import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
import "./todo.css";

class Todo extends Component {
    state = {
        todoText: "",
        todoArray: []
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Pending To-Dos</h3>
                    <h6>You have: {this.state.todoArray.length} pending To-Dos</h6>
                    <input
                        value={this.state.todoText}
                        onChange={this.onTextChange}
                        placeholder="Todo text" type="text"></input>
                    <button onClick={this.addTodoClicked}>Add</button>
                </div>
                <div className="toDoList">
                    {this.state.todoArray.map((item, index) => (
                    <div key={index}>
                    <li className="list-item">{item}
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
        var spreadTodoArray = [...this.state.todoArray];
        spreadTodoArray.push(this.state.todoText);
        this.setState({ todoArray: spreadTodoArray });
        // dispatch action
        this.props.addTodo(this.state.todoText);

        this.setState({ todoText: "" });
        console.log("New todo added");

    }

    removeTodoByText = (todoText) => {
        var copy = [...this.state.todoArray.filter(e => e !== todoText)];
        this.setState({todoList: copy});
    }

    removeTodo = (index) => {
        var copy = [...this.state.todoArray];
        copy = copy.splice(index, 1);
        this.setState({ todoArray: copy });
    }

}

export default connect(null, {addTodo})(Todo);
