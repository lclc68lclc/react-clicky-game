import React, { Component } from 'react';
import BearCard from './components/BearCard';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import bears from './bears.json';
import './App.css';

class App extends Component {

  state = {
    bears,
    score: 0,
    shuffled: [],
  };

  /*shuffleImages = () => {
    this.state.bears.map(bears.id => )
    this.setState({shuffled: this.state.bears});
  }*/

  render() {
    return (
      <div className="App">
        <Header score={this.state.score}></Header>
        <div>
          <Wrapper>
            {this.state.bears.map(bear => (
              <BearCard
                //shuffle={this.shuffleImages}
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
