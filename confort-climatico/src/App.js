import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Pages
import ConfortClimograma from './pages/ConfortClimograma';
import ConfortAshrae from './pages/ConfortAshrae';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfortClimograma></ConfortClimograma>
        <ConfortAshrae></ConfortAshrae>
      </div>
    );
  }
}

export default App;
