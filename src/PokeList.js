import React, { Component } from 'react';
import PokeItem from './Poke-item.js';

export default class PokeList extends Component {
    render() {
        return(
            <div id="displayContainer">
                <ul>
                    {this.props.data.map(pokemon => <PokeItem data={pokemon} />)}
                </ul>
            </div>
        )
    }
}


// data={pokemon}