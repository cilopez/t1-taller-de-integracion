import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import planetImage from '../../planet.png';


const Sprite = styled.img`
    width: 8em;
    height: 8em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
      
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class LocationCard extends Component {
    state = {
        id: '',
        name: '',
        episodeLink: 'https://rickandmortyapi.com/api/location/',
        url: '',
        dimension: null
    }
    
    componentDidMount(){
        this.setState({number: this.props.number, name:this.props.name, url : this.props.url});
        this.setState({ id : this.props.id });
        this.setState({ dimension: this.props.dimension});
    }

    render() {
        const name = this.props.name;
        const { dimension } = this.state;
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <StyledLink to={`/location/${this.state.id}`}>
                    <Card className='card'>
                        <h7 className='card-header'>{this.props.type}</h7>
                        <Sprite className='card-img-top rounded mx-auto mt-2' draggable={false} src={planetImage}></Sprite>
                        <div className='card-body mx-auto'>
                            <h6 className='card-title'>{name}</h6>
                            {dimension ?  <h6 className='card-title'>{dimension}</h6> :  <h6 className='card-title'> </h6>}
                        </div>
                    </Card>
                </StyledLink>
            </div>
        )
    }
}
