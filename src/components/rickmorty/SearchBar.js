import React, { Component } from 'react'
import LocationList from './LocationList';
import CharacterList from './CharacterList';
import EpisodesList from './EpisodesList';

export default class SearchBar extends Component {

    componentWillReceiveProps(nextProps) {
        window.location.reload();
    }
    render() {
        const filter = this.props.match.params.searchValue;
        return (
            <div>
                <h1>Characters</h1>
                <CharacterList filter={filter}/>
                <h1>Episodes</h1>
                <EpisodesList filter={filter}/>
                <h1>Location</h1>
                <LocationList filter={filter}/>
            </div>
        )
    }
}
