import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../store/actions";
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
                    <button className="td-btn" onClick={this.addTodoClicked}>Add</button>
                </div>
                <div className="toDoList">
                    {this.props.todoItems.map((t, index) => (
                        <div key={index}>
                            <li className="list-item">{t}
                                <button
                                    onClick={() => { this.removeTodoByTextStore(t) }}
                                    className="td-btn btn btn-info btn-sm">Remove</button></li>
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

    removeTodoByTextStore = (index) => {
        this.props.removeTodo(index);
    }


}

const mapStateToProps = (state) => {
    return {
        todoItems: state.todo
    }
};

export default connect(mapStateToProps, { addTodo, removeTodo })(Todo);
