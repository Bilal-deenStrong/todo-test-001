import React, { useState } from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 100%;
    padding: 3px;
    background-color: #000;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
`

const StyledInput = styled.input`
    display: flex;
    width: 100%;
    flex: 10;
    padding: 5px;
`
function AddTodo(props){

    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }
    const onChange = (e) => setTitle( e.target.value);

    return (
        <StyledForm 
        onSubmit = {onSubmit}>
            <StyledInput 
            type='text' 
            name='title' 
            placeholder='Add To Do List Item...'
            value={title}
            onChange={onChange}
            />
            <StyledInput
                type='submit'
                value='Submit'
                className='btn'
                style={{flex:'1'}}
            />
        </StyledForm>
    )
}

export default AddTodo
