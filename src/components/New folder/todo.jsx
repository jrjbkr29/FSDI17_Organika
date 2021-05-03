import React, { Component } from 'react';

class Todo extends Component {
    state = { 
        todoText: "",
        todoArray: []
     }
    render() { 
        return ( 
            <div>
                <div> 
            <h6>This is the Todo section</h6>
            <input 
            value={this.state.todoText}
            onChange={this.onTextChange} 
            placeholder="Todo text" type="text"></input>
            <button onClick={this.addTodo}>Add</button>
            </div>
            <div className="toDoList">
                    {this.state.todoArray.map((item) => <h5 key={item.todoText} data={item}>{item}</h5>)}
                </div>
            </div>
         );
    }

    onTextChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    addTodo = () => {
        var copy = this.state.todoArray;
        copy.push(this.state.todoText); // not recommended, might also clear the input field for our next todo
        this.setState({todoArray: copy, todoText: ""})
        
        // newTodo = this.state.todoText;
        // return newTodoArray = [...this.state.todoArray, this.state.todoText]

        this.state.todoArray.push(this.state.todoText);
        console.log(this.state.todoArray);
    
    }

}
 
export default Todo;



// catch the click event

// get the value from the input field value


//create an array on the state
// push the text to the array with click button & clear it
// display the list of todos from the array in the render method
//create an h5 for each todo
//map the array into html elemts
//