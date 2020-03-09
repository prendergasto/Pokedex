import React, { Component } from 'react';
import PokeItem from './Poke-item.js';

export default class PokeList extends Component {
    render() {
        return(
            <div>
                <ul id="displayContainer">
                    {this.props.data.map(pokemon => <PokeItem data={pokemon} />)}
                </ul>
            </div>
        )
    }
}



// let filteredPokemon = this.props.pokemons.filter(
//     (pokemon) => {
//         return pokemon.pokemon.indexOf(this.state.search) !== -1;
//     }
// );

// {filteredPokemon.map((pokemon) => {
//     return <Pokemon pokemon={pokemon}
// })}

// data={pokemon}