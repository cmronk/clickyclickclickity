import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // sets this.state.cards to the json array
  state = {
    cards
  };

  removeCard = id => {
    const cards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards });
  };
  
  // map over this.state.cards to render component
  render() {
    return (
      <Wrapper>
      <Title>Click</Title>
      {this.state.cards.map(card => (
        <Card
          removeCard={this.removeCard}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
          />
      ))}
    </Wrapper>
    );
  }
}

export default App;
