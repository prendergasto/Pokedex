import React, { Component } from "react";

export default class Search extends Component {
    constructor() {
        super();
        this.state = { search: "" };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.subtr(0, 20)});
    }
    render() {
        let filteredPokemon = this.props.pokemons;
        return(
            <div>
                
            </div>

        )
    }
}
   
   
   
   
   
   
   
   
//     state = { searchInput: "" }

//     handleForm = event => {
//         if(!this.state.searchInput) {
//             event.preventDefault();
//             return;
//         }
//         event.preventDefault();
//         const queryParam = new URLSearchParams();
//         queryParam.set('pokemon', this.state.searchInput);
//         queryParam.set("page", 1);
//         window.location.hash = queryParam.toString();
//     }
//     render() {
//         return(
//             <div id="search">
//                 <form onSubmit={this.handleForm}>
//                 <input id="search"
//                 onChange={e => this.setState({ searchName: e.target.value})} 
//                 value={this.state.searchName}/>
//                 <button id="submit">Search</button>
//                 </form>           
//             </div>
//         )
//     }
// }