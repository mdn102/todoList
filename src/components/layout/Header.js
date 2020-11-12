import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div style={headerStyle}>
            <center>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link>|<Link style={linkStyle} to="/about">About</Link>
            </center>
        </div>
    )
}

const headerStyle = {
    backgroundColor:'blue',
    width:'100vw',
    color:'white',
    padding:'10px 0px 10px 0px',
    margin:0
}

const linkStyle={
    color:'white',
    margin:'20px'
}
export default Header;
