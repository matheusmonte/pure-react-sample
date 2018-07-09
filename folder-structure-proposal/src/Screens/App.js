import React, { Component } from 'react';
import ContentBar from '../Components/contentBar/ContentBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ContentBar/>
        <p className="App-intro">
          Eu Estou direto na screen App
        </p>
      </div>
    );
  }
}

export default App;
