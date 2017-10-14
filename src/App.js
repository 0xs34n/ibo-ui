import React, { Component } from "react";
import BountyCard from "./BountyCard/BountyCard.js";
import BountyTitle from "./BountyTitle.js";
import Particles from "react-particles-js";
import particleSettings from "./particle.js";
import Switch from "antd/lib/switch";
import Admin from "./Admin.js";
import Hunter from "./Hunter.js";
import Web3 from "web3";
import * as truffle from "truffle-contract";
import IBO from "./contracts/IBO.json";
import async from 'async';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: false,
      web3: null,
      contracts: {},
      bounties: [
        {
          title: "POST TO TWITTER",
          icon: "twitter",
          details: "Post on twitter about Hack ETH and receive 100 coins",
          reward: 100,
          upload: "",
          claimed: false,
          modalOpen: false
        },
        {
          title: "POST TO FACEBOOK",
          icon: "facebook",
          details: "Post on twitter about Hack ETH and receive 100 coins",
          reward: 250,
          upload: "",
          claimed: false,
          modalOpen: false
        },
        {
          title: "POST TO PINTEREST",
          icon: "pinterest",
          details: "Post on twitter about Hack ETH and receive 100 coins",
          reward: 50,
          upload: "data:image/jpeg;base64,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",
          claimed: true,
          modalOpen: false
        }
      ]
    };
  }

  componentDidMount() {
    var self = this;
    async.waterfall([
      function (callback) {
        window.addEventListener("load", () => {
          // Checking if Web3 has been injected by the browser (Mist/MetaMask)
          if (typeof web3 !== "undefined") {
            // Use Mist/MetaMask's provider
            window.web3 = new Web3(window.web3.currentProvider);
            let ibo = truffle(IBO);
            ibo.setProvider(window.web3.currentProvider);
            ibo.setNetwork("3");
            callback(null, {web3 : window.web3, contracts: { ibo }});
          }
        });
      },
      function (bc, callback) {
        let web3 = bc.web3;
        web3.eth.getAccounts(function (error, accounts) {
          callback(error, {bc: bc, account : accounts[0]});
        })

      }
    ], function(error, data) {
        self.setState({
          web3 : data.bc.web3,
          account : data.account,
          contracts : data.bc.contracts
        });
    });
  }

  createClaim = () => {
    let ibo = this.state.contracts.ibo;
    let web3 = this.state.web3;
    ibo = ibo.at("0x27d66ada64b713710de3323ae107d15b252666c6");
    ibo
      .CreateClaim(0, this.state.account, "0x123456", {
        from: this.state.account
      })
      .then(txHash => console.log(txHash));
  };

  toAdmin = () => {
    this.setState({
      isAdmin: !this.state.isAdmin
    });
  };

  closeModal = index => {
    this.setState({
      bounties: this.state.bounties.map((bounty, bountyIndex) => {
        console.log(bountyIndex, index);
        if (index === bountyIndex) {
          return {
            ...bounty,
            modalOpen: false
          };
        } else {
          return bounty;
        }
      })
    });
  };

  openModal = index => {
    this.setState({
      bounties: this.state.bounties.map((bounty, bountyIndex) => {
        console.log(bountyIndex, index);
        if (index === bountyIndex) {
          console.log("true!");
          return {
            ...bounty,
            modalOpen: true
          };
        } else {
          return bounty;
        }
      })
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Particles
          params={particleSettings}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
        <Switch onChange={this.toAdmin} style={{ position: "absolute" }} />
        {this.state.isAdmin ? (
          <Admin 
            bounties={this.state.bounties}
          />
        ) : (
          <Hunter
            closeModal={this.closeModal}
            openModal={this.openModal}
            bounties={this.state.bounties}
            createClaim={this.createClaim}
          />
        )}
      </div>
    );
  }
}

/*
<BountyCard>
            <TwitterSquare size={size} style={{...picStyle, color: "#1DA1F2"}}/>
            <div className="post-text">POST ON TWITTER</div>
            <Button type="primary" className="details-button"> DETAILS </Button>
            <Modal title="POST ON TWITTER">
          </BountyCard>
          <BountyCard>
            <FbSquare size={size} style={{...picStyle, color: "#0084FF"}}/>
            <div className="post-text">POST ON FACEBOOK</div>
            <Button type="primary" className="details-button"> DETAILS </Button>
          </BountyCard>
          <BountyCard>
            <PinterestSquare size={size} style={{...picStyle, color: "#BD081C"}}/>
            <div className="post-text">POST ON PINTEREST</div>
            <Button type="primary" className="details-button"> DETAILS </Button>
          </BountyCard>
*/

export default App;
