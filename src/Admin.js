import React, { Component } from "react";
import ClaimTitle from "./ClaimTitle.js";
import ClaimCard from "./ClaimCard/ClaimCard.js";
import Modal from "antd/lib/modal";
import Button from "antd/lib/button";
import InputNumber from "antd/lib/input-number";
import Input from "antd/lib/input";

class Admin extends Component {
  state = { showModal: false };

  showModal = () => {
    this.setState({
      showModal: true
    });
  };

  handleCreate = e => {
    this.setState({
      showModal: false
    });
  };

  handleCancel = e => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div>
        <ClaimTitle />
        <Button
          onClick={this.showModal}
          type="primary"
          style={{ display: "inline-block", marginRight: "50px" }}
        >
          {" "}
          Create Bounty{" "}
        </Button>
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
          {this.props.bounties.map((bounty, index) => {
            if (bounty.upload !== "") {
              return (
                <ClaimCard
                  key={index}
                  title={bounty.title}
                  upload={bounty.upload}
                  acceptClaim={() =>
                    this.props.acceptClaim(index, bounty.claimID)}
                  rejectClaim={() => this.props.rejectClaim(index)}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <Modal
          title="Create A New Bounty"
          visible={this.state.showModal}
          onOk={this.handleCreate}
          okText="Create"
          cancelText="Cancel"
          onCancel={this.handleCancel}
        >
          <Input placeholder="Title" />
          <Input placeholder="Icon" />
          <Input placeholder="Details" />
          <InputNumber placeholder="Reward" />
        </Modal>
      </div>
    );
  }
}

/*
      title,
      icon,
      details,
      reward,
*/

export default Admin;
