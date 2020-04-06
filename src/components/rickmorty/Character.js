import React, { Component } from 'react'
import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';
import axios from 'axios';
import EpisodesList from './EpisodesList';


export default class Character extends Component {

    state = {
        url: 'https://integracion-rick-morty-api.herokuapp.com/api/character/',
        character: null,
    }

    async componentDidMount(){
        console.log(this.state.url+this.props.match.params.characterIndex);
        const characterInfo = await axios.get(this.state.url+this.props.match.params.characterIndex);
        this.setState({character: characterInfo.data});
    }

    render() {
        const {character} = this.state;
        return (
            <div className='col'>
                <div classname='row'>
                    {character ? 
                    <CharacterCard 
                    id={character.id}
                    status={character.status}
                    name={character.name}
                    species={character.species}
                    type={character.type}
                    gender={character.gender}
                    origin={character.origin}
                    location={character.location}
                    image={character.image}
                    episode={character.episode}
                    />
                    : <h1> Loading...</h1>
                    }
                 </div>
                <div classname='col'>
                    <h1>Localizaciones</h1>
                    <div className='row'>
                    {character ? <LocationCard type={'Location'} name={character.location.name} url={character.location.url} id={character.location.url.split('/')[5]}/>  : <h1> </h1>}
                    {character ? <LocationCard type={'Origin'} name={character.origin.name} url={character.origin.url} id={character.origin.url.split('/')[5]}/> : <h1> </h1>}
                    </div>

                </div>
                <div classname='row'>
                    <h1>Episodios</h1>
                        {character ? <EpisodesList episodes={character.episode}/> : <h1> Loading </h1>}
                </div>

            </div>
        ) 
    }
}
