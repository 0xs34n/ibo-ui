import React, { Component } from "react";
import Card from "antd/lib/card";

class BountyCard extends Component {
  render() {
    return (
      <Card 
        style={{ 
          borderRadius: "10px",
          width: "223px",
          height: "223px"
        }}
        className="bounty-shadow"
      >
        Bounty
      </Card>
    )
  }
}

export default BountyCard;
