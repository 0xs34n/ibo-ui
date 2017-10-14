import React, { Component } from "react";
import Card from "antd/lib/card";
import Button from "antd/lib/button";

class ClaimCard extends Component {
  render() {
    return (
      <Card
        style={{
          borderRadius: "10px",
          width: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "25px",
          marginTop: "25px",
          marginLeft: "2%",
          marginRight: "2%"
        }}
        className={`bounty-shadow`}
      >
        <a
          href={this.props.upload}             
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{
              width: "100px", 
              height: "100px",
              borderRadius: "10px",
              boxShadow: "0 1px 1px 0 rgba(10, 16, 34, .2)",
              marginTop: "10px",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "15px",
              display: "block"
            }}
            src={this.props.upload}
            alt="bounty"
          />
        </a>
        <div className="post-text" style={{textAlign: "center", marginBottom: "15px"}}>{this.props.title}</div>
        <div 
            style={{
              display: "flex",
              justifyContent: "spaceEvenly"
            }}
          >
            <Button 
              type="primary" 
              className="claim-button"
              onClick={this.props.acceptClaim}
            > 
              ACCEPT 
            </Button>
            <Button 
              type="danger"
              className="claim-button"
              onClick={this.props.rejectClaim}
            > 
              REJECT
            </Button>
          </div>
      </Card>
    );
  }
}

export default ClaimCard;
