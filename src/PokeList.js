import React, { Component } from 'react';
import PokeItem from './Poke-item.js';
import pokemon from './data.js'

export default class PokeList extends Component {
    render() {
        return(
            <div id="displayContainer">
                <ol>
                    {this.props.data.map(pokemon => <PokeItem data={pokemon} />)}
                </ol>
            </div>
        )
    }
}


// data={pokemon}