import React, { Component } from 'react'
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

export default class EpisodesList extends Component {
    state = {
        url: 'https://rickandmortyapi.com/api/episode',
        episodeList: [],
        episodeInfo: null 
    }

    async componentDidMount(){
        if (!this.props.episodes){
            const res = await axios.get(this.state.url);
            this.setState({ episodeList: res.data.results});
            this.setState({ episodeInfo: res.data.info});
            var next = res.data.info.next;
            // Iteramos todas las pages
            while (next !== "") {
                var nextRequest = await axios.get(next);
                this.setState({ episodeList: [...this.state.episodeList, ...nextRequest.data.results] });
                next = nextRequest.data.info.next;
            }
        } else{
            for (let index = 0; index < this.props.episodes.length; index++) {
                var episodeData = await axios.get(this.props.episodes[index]);
                this.setState({ episodeList: [...this.state.episodeList, episodeData.data]});
            }
        }
    }

    render() {

        return (
            <React.Fragment>
                {this.state.episodeList ?
                (
                <div className='row'>
                    {this.state.episodeList.map(episode => (<EpisodeCard key={episode.id} 
                    airDate={episode.air_date} episodeCode={episode.episode} name={episode.name} number={episode.id} />))}
                </div>
                ): <h1>Loading...</h1>
                }
            </React.Fragment>

        )
    }
}
