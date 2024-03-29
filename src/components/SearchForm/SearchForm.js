import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}

handleClick = (e) => {
  e.preventDefault();
  const searchText = this.state.input.toLowerCase();
  this.props.displayNewsSearch(searchText);
  this.resetInput();
}

resetInput = () => {
  this.setState({
    input: '',
  });
}

render() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <form>
      <input
        type="text"
        placeholder="Enter a news topic"
        name="input"
        value={this.state.input}
        onChange={(e) => this.handleChange(e)}
      />
      <button
        className="search__btn"
        type="submit"
        onClick={(e) => this.handleClick(e)}
      > Search Now
      </button>
    </form>
  );
}
}


export default SearchForm;
