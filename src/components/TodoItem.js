import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            // This sets the background color
            background: '#f4f4f4',
            // This sets out how far each apart the words are from each other
            // Is this ever dynamically set?
            padding: '10px',
            // #ccc is a color code
            // dotted is a bottomBorder style
            // 1px is the line width
            borderBottom: '1px #ccc dotted',
            // This changes the 
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',
            // // To change the color of the button
            // color: this.props.todo.completed ? 
            // 'green' : 'red',
            // textAlign: 'center'

        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            // By creating a getStyle method, we can dynamically code
            // the how we want to each TodoItem
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' 
                    onChange={this.props.markComplete.bind(this,id)}/> 
                    {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this,id)} style=
                    {btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    border: '1px #000000 solid',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right'

    
}

export default TodoItem
