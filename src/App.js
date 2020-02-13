import React, { Component } from 'react';
import './App.css';
import request from 'superagent'
import PokeList from './PokeList.js';
// import images from './data.js';
// import pokeData from './data.js';
// import pokemon from './data.js';



export default class App extends React.Component {
  state = {
    selected: null,
    data: null,
  }
  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')

    console.log(data.body);
    this.setState({ data: data.body.results })
  }
  render() {
    return (
      <div id="requiredContainer">
      { this.state.data
      ? <PokeList data={this.state.data}/>
      : 'loading content' 
      } 
      </div>

    )
    }
}

// data={pokeData}