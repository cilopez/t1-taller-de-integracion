import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

export default class EpisodeCard extends Component {
    state = {
        number: null,
        name: '',
        airDate: '',
        episodeCode: '',
        episodeLink: 'https://integracion-rick-morty-api.herokuapp.com/api/episode/',
        characters: []
    }
    
    componentDidMount(){
        this.setState({number: this.props.number});
    }

    render() {
        const {name, airDate, episodeCode} = this.props;
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <StyledLink to={`/episode/${this.state.number}`}>
                    <Card className='card'>
                        <h7 className='card-header'>{episodeCode}</h7>
                        <Sprite className='card-img-top rounded mx-auto mt-2' draggable={false} src={'https://integracion-rick-morty-api.herokuapp.com/api/character/avatar/1.jpeg'}></Sprite>
                        <div className='card-body mx-auto'>
                            <h6 className='card-title'>{name}</h6>
                            <h8 className='card-description'>{airDate}</h8>
                        </div>
                    </Card>
                </StyledLink>
            </div>
        )
    }
}
