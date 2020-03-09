import React, { Component } from 'react';
import './App.css';
import request from 'superagent'
import PokeList from './PokeList.js';
import Header from './Header.js';
import SearchOptions from './SearchOptions';
import Paging from './paging.js';



export default class App extends React.Component {
  state = {
    selected: null,
    data: null,
  }
  async componentDidMount() {
    const data = await request.get("https://alchemy-pokedex.herokuapp.com/api/pokedex");

    console.log(data.body);
    this.setState({ data: data.body.results })

  }
  render() {
    return (
      <div id="requiredContainer">
      <Header />
      <SearchOptions />
      { this.state.data
      ? <PokeList data={this.state.data}/>
      : 'loading content' 
      } 
      <Paging />
      </div>

    )
    }
}


 // window.addEventListener("hashchange", async () => {
    //   await this.data();
    // })