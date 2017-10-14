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
          upload: "",
          claimed: false,
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
          <Admin />
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
