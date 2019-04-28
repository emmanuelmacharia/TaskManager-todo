import React, { Component } from 'react';
import TodoItem from './TodoItems';
import PropTypes from 'prop-types';


class Todos extends Component {


    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key = {todo.id} todo={todo} toggleComplete = {this.props.toggleComplete} deleteTodo = {this.props.deleteTodo}/>
        ));
    }
}

//INITIATING PROP TYPES
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos; 
