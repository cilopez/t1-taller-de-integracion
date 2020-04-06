import React, { Component } from 'react'
import CharacterList from './CharacterList';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

export default class Episode extends Component {
    state = {
        index: null,
        name: '',
        airDate: '',
        episodeCode: '',
    }

    async componentDidMount(){
        const res = await axios.get('https://integracion-rick-morty-api.herokuapp.com/api/episode/'+this.props.match.params.episodeIndex);
        console.log(res);
        this.setState({name: res.data.name, airDate: res.data.air_date, episodeCode: res.data.episode, index: res.data.id})

    }

    render() {
        const { index, name, airDate, episodeCode } = this.state;
        return (
            <div>
                <div>
                    <h1>Capitulo {this.props.match.params.episodeIndex}</h1>
                    {index ? <EpisodeCard
                    airDate={airDate} episodeCode={episodeCode} name={name}  number={index}/> : <h1> </h1>}
                </div>
                <div className='row'>

                    <div className='col'>
                        <h1>Personajes</h1>
                        <CharacterList index={this.props.match.params.episodeIndex}/>
                    </div>
                </div>
            </div>
        )
    }
}
