import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todo extends Component {
    render() {
        // console.log(this.props.todo);
        return (
            <div>                
                    {this.props.todo.map((todo) => 
                    { return(
                    <TodoItem key={todo.id} item={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
                    )
    })}
                
            </div>
        )
    }
}

export default Todo
