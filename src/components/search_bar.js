import React, { Component } from 'react';
// const Component = React.Component; 라고 쓴것과 같음

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
