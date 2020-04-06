import React, { Component } from 'react'
import LocationCard from './LocationCard';
import axios from 'axios';

export default class LocationList extends Component {
    state = {
        locationList: null,
        locationInfo: null
    }

    async componentDidMount(){
        const filter = this.props.filter;
        const url = 'https://integracion-rick-morty-api.herokuapp.com/api/location/?name='+filter;
        const res = await axios.get(url);
        this.setState({ locationInfo: res.data.info, locationList: res.data.results});
        var next = res.data.info.next;
        // Iteramos todas las pages
        while (next !== "" ) {
            var nextRequest = await axios.get(next);
            this.setState({ episodeList: [...this.state.locationList, ...nextRequest.data.results] });
            next = nextRequest.data.info.next;
        }
    }

    render() {
        return (
            <React.Fragment>
            {this.state.locationList ?
            (
            <div className='row'>
                {this.state.locationList.map(location => {
                    return (<LocationCard key={location.id} dimension={location.dimension}  name={location.name} />);
                })}
            </div>
            ): <h3>Not found</h3>
            }
        </React.Fragment>
        )
    }
}
