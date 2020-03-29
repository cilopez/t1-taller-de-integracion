import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    state={
        searchValue: '',
    }

    handleChange(e) {
        this.setState({searchValue: e.target.value});
    }

    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-dark fixed-top' 
                style={{backgroundColor: '#4682b4' }}>
                    <Link to='/'>
                        <a style={{color: 'white'}} className='navbar-brand-col col-sm-3 col-md-2 mr-0 align-items-center'>Rick & Morty Data</a>
                    </Link>
                    <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    <Link to={`/search/${this.state.searchValue}`}>
                        <button type="button" class="btn btn-dark">Buscar</button>
                    </Link>
                </nav>
            </div>
        )
    }
}
