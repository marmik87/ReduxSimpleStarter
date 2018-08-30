import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search.js';

const API_KEY = 'AIzaSyAGo4BbKQ_WHHPw9X4aiehQXgh4SkIYpcU';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
