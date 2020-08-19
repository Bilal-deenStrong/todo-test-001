import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function TodoItem (props){
        const { id, title } = props.todo;

        return (
            <TodoItemBar toDoCompleted = {props.todo.completed} >
                <p>
                    <input type='checkbox' 
                    onChange={props.setComplete.bind(this,id)}/> 
                    {' '}
                    { title }
                    <Button onClick={props.deleteTodo.bind(this,id)} >X</Button>
                </p>
            </TodoItemBar>
        )
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//The styling for the bar within which ToDo items are stored
const TodoItemBar = styled.div`
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    text-decoration: ${props => props.toDoCompleted ? 
    'line-through' : 'none'};
`
//The styling for the delete button
const Button = styled.button`
    background: #ff0000;
    border: 1px #000000 solid;
    color: #fff;
    padding: 5px 10px;
    border-radius: 30%;
    float: right;
`

export default TodoItem
