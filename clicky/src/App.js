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
    clickedImages: []
  };

  playGame = id =>{
    //console.log(id.target.id);
    if(this.state.clickedImages.includes(id.target.id)=== false){
      this.setState(
        {
          score: this.state.score + 1,
          clickedImages: [...this.state.clickedImages, id.target.id],
          
        })
        console.log(this.state.clickedImages);
    }else{
      this.setState(
        {
          score: 0,
          clickedImages: []
        }
    )}
    this.randomize();
    
    };


  randomize = id => {
    this.setState(
      {
        bears: this.shuffleImages(this.state.bears)
      })
  };

  shuffleImages = (arr) => {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  };

  render() {
    return (
      <div className="App">
        <Header score={this.state.score}></Header>
        <div>
          <Wrapper>
            {this.state.bears.map(bear => (
              <BearCard
                playGame = {this.playGame}
                id={bear.id}
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
