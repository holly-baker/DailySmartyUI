import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './search-bar';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ResultsPosts from './resultsPosts';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    } 

    render() {
        return (
            <div>
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit}/>
                <ResultsPosts/>
            </div>
        )
    }
}

export default connect(null, actions)(Results);