import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import mongoose from 'mongoose';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('PLACEHOLDER URL')
      .then(res => this.setState({ todos: res.data}))
  }
  markComplete = (id) => {
      this.setState( { todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) })
        //this.props.todo.completed = !this.props.todo.completed
  }
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => 
      todo.id !== id)]})
    //console.log('Button Pressed')

  }
  addTodo = (title) => {
    this.setState({ todos: [...this.state.todos, {
      id: this.findMaxIDNum(),
      title: title,
      completed:false
    }]})
  }
  findMaxIDNum = () => {
    try{
      const a = this.state.todos[this.state.todos.length-1].id +1
      return a
    } catch (e) {
      return 1
    }
  }
  render(){
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route exact path='/' render = {props => (
              <React.Fragment>
                <AddTodo 
                addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo = {this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
