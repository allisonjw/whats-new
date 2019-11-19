import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
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
      currentNews: local
    }
  }

  changeNewsType = (e) => {
    this.setState({currentNews: this[e.target.name]})
  }

  displayNewsSearch = input => {
    const searchResults = this.state.currentNews.filter(article => article.headline.toLowerCase().includes(input));
    this.setState({ currentNews: searchResults});
  }

  render () {
    return (
      <div className="app">
        <Menu changeNewsType={this.changeNewsType}/>
        <main>
          <SearchForm displayNewsSearch={this.displayNewsSearch}/>
          <NewsContainer news={this.state.currentNews}/>
        </main>  
      </div>
    );
  }
}

export default App;
