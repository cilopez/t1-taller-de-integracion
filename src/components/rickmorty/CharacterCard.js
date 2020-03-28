import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const STATUS_COLORS = {
    Dead: 'E73B0C',
    Alive: '74C236',
    unknown: 'B5B5C3',
  };

const Sprite = styled.img`
    width: 8em;
    height: 8em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Card = styled.div`
  opacity: 0.95;
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


export default class CharacterCard extends Component {
    state = {
        id: null,
        status: '',
        name: '',
        species: '',
        type: '',
        gender: '',
        origin: null,
        location: null,
        image: '',
        episode: [],
        url: ''
    }
    
    render() {
        const {id, name, status, type, gender, species, image} = this.props;
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <StyledLink to={`/character/${id}`}>
                    <Card className='card'>
                        <div className='col 7'>
                            <div className="float-right">
                                <span
                                className="badge badge-pill mr-1"
                                style={{
                                    backgroundColor: `#${STATUS_COLORS[status]}`,
                                    color: 'white'
                                }}
                                >
                                {status}
                                </span>
                            </div>
                        </div>
                        <Sprite className='card-img-top rounded mx-auto mt-2' draggable={false} src={image}></Sprite>
                        <div className='card-body mx-auto'>
                            <h5 className='card-title'>{name}</h5>
                            <div>
                                <h8 className='card-description'>{`Type: ${type}`}</h8>
                            </div>
                            <div>
                                <h8 className='card-description'>{`Gender: ${gender}`}</h8>
                            </div>
                            <div>
                                <h8 className='card-description'>{`Species: ${species}`}</h8>
                            </div>
                            {/* <div>
                                <h10 className='card-description'>{`Origin: ${origin.name}`}</h10>
                            </div>
                            <div>
                                <h10 className='card-description'>{`Location: ${location.name}`}</h10>
                            </div> */}
                        </div>
                    </Card>
                </StyledLink>
            </div>
        )
    }
}
