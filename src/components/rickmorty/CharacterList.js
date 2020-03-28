import React, { Component } from 'react'
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default class CharacterList extends Component {
    state = {
        index: '',
        characters: [],
        url: 'https://rickandmortyapi.com/api/episode',
        location: null
    }

    async componentDidMount(){
        let url = '';
        if (this.props.location) {
            url = 'https://rickandmortyapi.com/api/location';
            
        } else {
            url = this.state.url;
        }
        const index = this.props.index;
        const res = await axios.get(url+'/'+index);
        console.log(res);
        if (this.props.location) {
            for (let index = 0; index < res.data.residents.length; index++) {
                const characterInfo = await axios.get(res.data.residents[index]);
                this.setState({ characters: [...this.state.characters,characterInfo.data]});
            }
            
        } else {
            for (let index = 0; index < res.data.characters.length; index++) {
                const characterInfo = await axios.get(res.data.characters[index]);
                this.setState({ characters: [...this.state.characters,characterInfo.data]});
            }
        }
    }

    render() {

        return (
            <React.Fragment>
                {this.state.characters ?
                (
                <div className='row'>
                    {this.state.characters.map(character => (<CharacterCard 
                    id = {character.id}
                    key={character.id}
                    status={character.status}
                    name={character.name}
                    species={character.species}
                    type={character.type}
                    gender={character.gender}
                    origin={character.origin}
                    location={character.location}
                    image={character.image}
                    episode={character.episode}
                    />))}
                </div>
                ): <h1>Loading...</h1>
                }
            </React.Fragment>

        )
    }
}
