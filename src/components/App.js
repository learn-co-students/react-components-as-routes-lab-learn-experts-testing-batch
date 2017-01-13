import React from 'react'

import NavBar from './NavBar'

const App = (props) => {
    return (
        <div>
            {/* code goes here */}
            <NavBar />
            {props.children}
        </div>
    )
}

module.exports = App
