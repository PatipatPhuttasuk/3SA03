import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';


class App extends Component {
  render() {
    return (
      <div><center>
        {
          <WordCard value="PATIPAT" />
        }
      </center></div>
    );
  }
}
export default App;
