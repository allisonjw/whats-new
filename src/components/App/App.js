import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
// import Menu from '../Menu/Menu';
// import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.local = local;
    this.entertainment = entertainment;
    this.health = health;
    this.science = science;
    this.technology = technology;
    this.state = {
      currentNews: this.local
    }
  }

  render () {
    return (
      <div className="app">
        {/* <Menu /> */}
        <main>
          <h1>YOUR CODE GOES HERE!</h1>
          {/* <SearchForm /> */}
          <NewsContainer news={this.state.currentNews}/>
        </main>  
      </div>
    );
  }
}

export default App;
