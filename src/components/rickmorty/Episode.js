import React, { Component } from 'react'
import CharacterList from '../rickmorty/CharacterList';

export default class Episode extends Component {
    state = {
        index: null
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Capitulo {this.props.match.params.episodeIndex}</h1>
                </div>
                <div className='row'>

                    <div className='col'>
                        <CharacterList index={this.props.match.params.episodeIndex}/>
                    </div>
                </div>
            </div>
        )
    }
}
