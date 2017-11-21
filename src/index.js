import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import config from './config';

const YOUTUBE_API_KEY = config.YOUTUBE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
      // this.setState({ videos: videos }); 와 같은 구문
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
