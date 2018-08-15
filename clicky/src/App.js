import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // sets this.state.cards to the json array
  state = {
    cards
  };


  // we need to make this shuffle cards vs remove them
  // removeCard = id => {
  //   const cards = this.state.cards.filter(card => card.id !== id);
  //   this.setState({ cards });
  // };

  // map over this.state.cards to render component
  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Title>Dr. Seuss Click</Title>
          {this.state.cards.map(card => (
            <Card
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
