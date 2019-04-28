import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
    // gettoggleComplete = () => {
    //     if(this.props.todo.completed){
    //         return{
    //             textDecoration: 'line-through'
    //         }
    //     }else{
    //         return{
    //             textDecoration: 'none'
    //         }
    //     }
    // }
    getStyle = () => {
        return {
            bacoground: 'grey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {

    const {id, title} = this.props.todo //destructuring
    return (
        <div style={this.getStyle()}>
        <p>
        <input type= 'checkbox' onChange = {this.props.toggleComplete.bind(this, id)}/> {'   '}
        {title}
        <button 
        style = {{backgroundColor: 'red', border: 'solid 1px', borderRadius: '50%', float: 'right', padding: '5px', width: '30px', height: '30px'}}
        onClick = {this.props.deleteTodo.bind(this, id)}>x</button>
        </p>
        </div>
    )
    }
}



//INITIATING PROP TYPES
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired

}


export default TodoItems
