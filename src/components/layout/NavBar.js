import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-dark fixed-top' 
                style={{backgroundColor: '#4682b4' }}>
                    <a style={{color: 'white'}} className='navbar-brand-col col-sm-3 col-md-2 mr-0 align-items-center'>Rick & Morty Data</a>
                </nav>
            </div>
        )
    }
}
