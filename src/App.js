import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
const word = "Hello";
class App extends Component {
  render() {
    return (
      <div><center>
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i} />)
        }
      </center></div>
    );
  }
}
export default App;
