import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterableList from "./components/FilterableList/FilterableList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;
