import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
        return props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setComplete = 
        {props.setComplete} deleteTodo = {props.deleteTodo}/>
        ));
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
