import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
    background: #333;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
`

const H5 = styled.h5`
    text-align: right;
    background: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
`
function Header() {
    return (
        <header>

            <H1>To-Do List Web App</H1>
            <H5>By Bilal Sher</H5>

        </header>
    )
}

export default Header;