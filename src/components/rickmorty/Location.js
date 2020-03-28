import React, { Component } from 'react'
import CharacterList from '../rickmorty/CharacterList';
import LocacationCard from './LocationCard';
import axios from 'axios';


export default class Location extends Component {
    state ={
        id: null,
        name: '',
        type: '',
        dimension: '',
        url: 'https://rickandmortyapi.com/api/location/',
        characters: [],
    } 
    async componentDidMount(){
        const location = await axios.get(this.state.url+this.props.match.params.locationIndex);
        this.setState({dimension: location.data.dimension, name: location.data.name, type: location.data.type});
        this.setState({id: this.props.match.params.locationIndex});

    }
    render() {
        const {name, type, dimension} = this.state;
        return (
            <div>
                {this.state.id ? <LocacationCard id={this.state.id} type={type} name ={name} dimension={dimension}/>: <h1> </h1>}
                <h1> Residentes </h1>
                {this.state.id ? <CharacterList location={true} index={this.state.id}/> :<h1> Cargando </h1>}
            </div>
        )
    }
}
