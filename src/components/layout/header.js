import React from 'react';

const headerStyleH1 = {
    textAlign: 'center',
    background: '#333',
    color: '#fff',
    padding: '10px'
}

const headerStyleH5 = {
    textAlign: 'right',
    background: 'black',
    color: 'white',
    padding: '5px'

}

function Header() {
    return (
        <header>

            <h1 style={headerStyleH1}>To-Do List Web App</h1>
            <h5 style={headerStyleH5}>By Bilal Sher</h5>

        </header>
    )
}

export default Header;