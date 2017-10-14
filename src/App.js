import React, { Component } from 'react';
import BountyCard from "./BountyCard.js";
import BountyTitle from "./BountyTitle.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <BountyTitle />
        <div style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}>
          <BountyCard />
          <BountyCard />
          <BountyCard />
        </div>
      </div>
    );
  }
}

export default App;
