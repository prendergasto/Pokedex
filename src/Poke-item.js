  import React, { Component } from 'react';

  export default class PokeItem extends Component {
      
      render() {
          return (
              <div id="pokemonContainer">
                  <li>
                    <h1>{this.props.data.pokemon}</h1>
                    <img src={this.props.data.url_image} alt="" />
                    <h3>Type: {this.props.data.type_1}</h3>
                    <h3>Ability: {this.props.data.ability_1}</h3>
                  </li>
              </div>
          )
      }
  }

