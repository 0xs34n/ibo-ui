import React, { Component } from 'react';
import ClaimTitle from "./ClaimTitle.js";
import ClaimCard from "./ClaimCard/ClaimCard.js";
import Button from "antd/lib/button"

class Admin extends Component {
  state = { showModal: false }

  showModal = () => {
    this.setState({
      showModal: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      showModal: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div>
        <ClaimTitle />
        <Button type="primary" style={{display: "inline-block", marginRight: "50px"}}> Create Bounty </Button>
        <div style={{
          display: "flex",
          justifyContent: "spaceAround",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "80%",
          marginRight: "10%",
          marginLeft: "10%"
        }}>
          {this.props.bounties.map((bounty, index) => {
            if(bounty.upload !== "") {
              return (
                <ClaimCard
                  key={index}
                  title={bounty.title}
                  upload={bounty.upload}
                  acceptClaim={() => this.props.acceptClaim(index, bounty.claimID)}
                  rejectClaim={() => this.props.rejectClaim(index)}
                />
              )
            } else {
              return null;
            }
            })}
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          okText="CREATE"
          cancelText="CANCEL"
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default Admin;