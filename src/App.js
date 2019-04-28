import React, {Component} from 'react';
import axios from 'axios';
// import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';


// function App() {
//   return (
//     <div className="App">
//         <h1>App</h1>
//     </div>
//   );
// }


class App extends Component{
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  //TOGGLES THE TODO AS EITHER COMPLETE OR NOT

  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title, 
      comleted: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className = 'container'>
            <Header />
            <Route exact path = '/' render = {props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos  = {this.state.todos} toggleComplete = {this.toggleComplete} deleteTodo = {this.deleteTodo}/>
              </React.Fragment>
            )} />
            <Route path = '/about' component = {About} />
          </div>
        </div> 
      </Router>
    );
  }
}


export default App; 
