import React, { Component } from 'react'
import EpisodeList from '../rickmorty/EpisodesList';

export default class DashBoard extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <EpisodeList/>
                </div>
            </div>
        )
    }
}
