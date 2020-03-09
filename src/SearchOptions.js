import React,  { Component }  from "react";

export default class SearchOptions extends Component {
    componentDidMount() {
        this.updateControls();

        window.addEventListener("hashchange", () => {
            this.updateControls();
        });
    }
    
    state = { searchInput: "" };

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        // const type = searchParams.get("type");

        this.setState({
            searchInput: searchParams.get("s") || ""
        });
    }

    handleSubmit = event => {
        const form = document.querySelector("form");
        event.preventDefault();
        const formData = new FormData(form);
            
        const queryString = window.location.hash.slice(1); 
        const searchParams = new URLSearchParams(queryString);
            
        // searchParams.set("type", formData.get("type"));
        searchParams.set("s", formData.get("search"));
        searchParams.set("page", 1);

            window.location.hash = searchParams.toString(); 
        };
    render() {
        return (
            <form className="options" onSubmit={this.handleSubmit}>
                <label for = "search">Search:</label>
                <div>
                    <input
                    id="search"
                    name="search"
                    onChange={e => this.setState({ searchInput: e.target.value })}
                    value={this.state.searchInput}
                    />
                </div>
                <p>
                    <button>Search</button>
                </p>
            </form>
        )
    };

}

// 🔍