import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({title: e.target.value});
    onSubmit = (e) => {
        e.preventDefault(); //STOPS SUBMISSION TO THE ACTUAL FILE;WE WANT THIS SO THAT IT CAN ADD TO OUR TODO COMPONENT
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render() {
    return (
        <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
            <input 
                type='text'
                name='title'  
                style = {{flex: '10', padding: '5px'}}
                placeholder= 'Add a new todo...'
                value = {this.state.title}
                onChange = {this.onChange}
            />
            <input
                type = "submit"
                value = "Submit"
                className = 'btn'
                style = {{flex: '1'}}
            />
        </form>
    )
    }
}
// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
