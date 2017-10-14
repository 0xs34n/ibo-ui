import React, { Component } from 'react';
import BountyTitle from "./BountyTitle.js";
import BountyCard from "./BountyCard/BountyCard.js";

class Hunter extends Component {
  render() {
    return (
      <div>
        <BountyTitle />
        <div
          style={{
            display: "flex",
            justifyContent: "spaceAround",
            flexWrap: "wrap",
            flexDirection: "row",
            width: "80%",
            marginRight: "10%",
            marginLeft: "10%"
          }}
        >
          {this.props.bounties.map((bounty, index) => (
            <BountyCard
              key={index}
              title={bounty.title}
              icon={bounty.icon}
              details={bounty.details}
              reward={bounty.reward}
              claimed={bounty.claimed}
              modalOpen={bounty.modalOpen}
              closeModal={() => this.props.closeModal(index)}
              openModal={() => this.props.openModal(index)}
              createClaim={this.props.createClaim}
            />
            ))}
        </div>
      </div>
    );
  }
}

export default Hunter;