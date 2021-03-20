import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import {SearchBox}  from './components/search-box/search-box.component.jsx'


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFeild: ''
    }

  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respone => respone.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchFeild: e.target.value})
  }

  render () {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase()
      ));

  return (
    <div className="App">
      <h1> Monsters Rolodex</h1>
     <SearchBox
      placeHolder='search monsters'
      handleChange={this.handleChange}      
    />
    <CardList monsters={filteredMonsters} />    
    </div>
  );
  }
}

export default App;
