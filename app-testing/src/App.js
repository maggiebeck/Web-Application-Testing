import React from 'react';
import './App.css';
import Display from './display';
import Dashboard from './dashboard';

 //every time i run prettier on this page it indents with 2 spaces, but on my other pages it indents with 4! 

 class App extends React.Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0,
  }
  addStrike = (e) => {
    e.preventDefault();
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      })
    } else {
      this.setState({
        strike: 0,
        ball: 0
      })
    }
  }
  addBall = (e) => {
    e.preventDefault();
    if (this.state.ball < 3) {
      this.setState({
        ball: this.state.ball + 1
      })
    } else {
      this.setState({
        strike: 0,
        ball: 0
      })
    }
  }
  addFoul = (e) => {
    e.preventDefault();
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      })
    } else {
      this.setState({
        ...this.state
      })
    }
  }
  addHit = (e) => {
    e.preventDefault();
    this.setState({
      hit: this.state.hit + 1,
      strike: 0,
      ball: 0
    })
  }
  render() {
    return ( 
      <div>
      <Display strikes = {
        this.state.strike
      }
      balls = {
        this.state.ball
      }
      /> <
      Dashboard addStrike = {
        this.addStrike
      }
      addBall = {
        this.addBall
      }
      addFoul = {
        this.addFoul
      }
      addHit = {
        this.addHit
      }
      /> 
      </div>
    );
  }
}
export default App; 
