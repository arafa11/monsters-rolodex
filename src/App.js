import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonestes = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="Search Monsters" 
          handleChange={e => this.setState({searchField: e.target.value},()=>console.log(this.state.searchField))} 
        />
        <CardList monsters={filteredMonestes} />
      </div>
    );
  }
}

export default App;
