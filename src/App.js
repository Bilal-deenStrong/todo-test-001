import React, { useState } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

function App (props){
  const [todos, setTodos] = useState([])

  const setComplete = (id) => {
    const tempTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
    setTodos(tempTodos);
  }

  const deleteTodo = (id) => {
    const tempTodos = todos.filter(todo => todo.id !== id);
    setTodos(tempTodos);
  }

  const addTodo = (title) => {
    setTodos([...todos, {
      id: findMaxIDNum(),
      title: title,
      completed:false
    }]);
  }

  const findMaxIDNum = () => {
    try{
      const a = todos[todos.length-1].id +1
      return a
    } catch (e) {
      return 1
    }
  }

    return (

        <div className='App'>
          <div className='container'>
            <Header />

              <React.Fragment>
                <AddTodo 
                addTodo={addTodo}/>
                <Todos todos={todos} 
                setComplete={setComplete}
                deleteTodo = {deleteTodo}/>
              </React.Fragment>

          </div>
        </div>

    );
}

export default App;
