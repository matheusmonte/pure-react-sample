import React, { Component } from 'react';
import logo from '../../Assets/logo.svg';
import './contentBar.css';


class ContentBar extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Eu sou um componente</h1>
          </header>
          </div>);
    }
}

export default ContentBar;