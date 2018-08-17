import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import cards from "./cards.json";

// "Durstenfeld shuffle" https://medium.com/@anthonyfuentes/do-the-shuffle-the-durstenfeld-shuffle-7920c2ce0c45 and stack overflow
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // sets this.state.cards to the json array
  state = {
    cards,
    score: 0,
    topScore: 0,
    scoring: "Test your memory and don't click on the same character twice!",
    clicks: []
  };

  handleClicks = id => {
    // checks if index is in array, if not will be -1
    if (this.state.clicks.indexOf(id) === -1) {
      console.log(id);
      this.handleIncrement();
      this.setState({ clicks: this.state.clicks.concat(id) });
    }
    else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    let newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      scoring: ""
    });
    this.handleShuffle();
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      })
    }
    if (newScore === 12) {
      this.setState({ 
        scoring: "You win! Click on an image to play again!" 
      })
    }
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      scoring: "Sorry, you've already selected me!",
      clicks: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(cards);
    this.setState({ cards: shuffledCards });
  };

  // map over this.state.cards to render component
  render() {
    return (
      <div>
        <Navbar
          scoring={this.state.scoring}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title>One Click, Two Click</Title>
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              handleClicks={this.handleClicks}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
