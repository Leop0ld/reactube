import React, { Component } from 'react';
// const Component = React.Component; 라고 쓴것과 같음

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = { term: '' };
  }

  render() {
    // state 는 this.setState 메서드를 통해서만 변경해야함
    // state 가 변경될 때마다 setState 메서드를 호출하고, 리렌더링함
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
