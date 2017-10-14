import React, { Component } from "react";
import Card from "antd/lib/card";
import FbSquare from "react-icons/lib/fa/facebook-square";
import TwitterSquare from "react-icons/lib/fa/twitter-square";
import PinterestSquare from "react-icons/lib/fa/pinterest-square";
import Button from "antd/lib/button";
const size = 60;
const picStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5px"
};

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
          marginLeft: "4%",
          marginRight: "4%"
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
              marginBottom: "33px",
              display: "block"
            }}
            src={this.props.upload}
          />
          <div 
            style={{
              display: "flex",
              justifyContent: "spaceBetween"
            }}
          >
            <Button type="primary" className="claim-button"> ACCEPT </Button>
            <Button type="danger" className="claim-button"> REJECT </Button>
          </div>
        </a>
      </Card>
    );
  }
}

export default ClaimCard;
