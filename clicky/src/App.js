import React, { Component } from 'react';
import BearCard from './components/BearCard';
import bears from './bears.json';
import './App.css';

class App extends Component {

  state = {
    bears
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gummi Bears Clicky</h1>
        </header>
        <div>
          {this.state.bears.map(bear => (
            <BearCard 
              //shuffle={this.shuffle}
              key ={bear.id} 
              src={bear.image} 
              alt={bear.name}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
