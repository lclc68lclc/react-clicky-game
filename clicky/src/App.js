import React, { Component } from 'react';
import BearCard from './components/BearCard';
import Wrapper from './components/Wrapper';
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
          <Wrapper>
            {this.state.bears.map(bear => (
              <BearCard
                key={bear.id} 
                image={bear.image} 
                name={bear.name}
              />
          ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
