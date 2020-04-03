import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./search-bar";
import RecentPosts from "./recentPosts"

export default class Home extends Component {

  handleSearchBarSubmit = function({query}) {
    console.log('trying to handle submit for query', query);

    this.props.history.push('/results');
}

  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar onSubmit={(qyery) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts />
      </div>
    );
  }
}
