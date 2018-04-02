import React, { Component } from 'react';
import PostList from './Components/PostList.js';
import data from './data.js';

class App extends Component {
  render() {

    return (
      < PostList 
      	data = {data}
      />
    );
  }
}

export default App;
