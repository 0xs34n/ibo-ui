import React, { Component } from "react";
import Card from "antd/lib/card";
import FbSquare from "react-icons/lib/fa/file-image-o";
import TwitterSquare from "react-icons/lib/fa/file-image-o";
import PinterestSquare from "react-icons/lib/fa/file-image-o";
import Modal from "antd/lib/modal";
import Button from "antd/lib/button";
import Upload from "antd/lib/upload";
import Icon from "antd/lib/icon";
import message from "antd/lib/message";
import Input from "antd/lib/input";
const Dragger = Upload.Dragger;
const size = 60;
const picStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5px"
};

class BountyCard extends Component {
  onUpload = info => {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      this.props.uploadBounty(this.props.index, info.file.thumbUrl)
      this.props.createClaim()
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  renderIcon(icon) {
    switch (icon) {
      case "twitter":
        return (
          <TwitterSquare
            size={size}
            style={{ ...picStyle, color: "#3dbd7d" }}
          />
        );
      case "facebook":
        return (
          <FbSquare size={size} style={{ ...picStyle, color: "#49a9ee" }} />
        );
      case "pinterest":
        return (
          <PinterestSquare
            size={size}
            style={{ ...picStyle, color: "#f46e65" }}
          />
        );
      default:
        return null;
    }
  }

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
        {this.renderIcon(this.props.icon)}
        <div className="post-text">{this.props.title}</div>
        <div className="reward-text">{this.props.reward} BT</div>
        <Button
          type="primary"
          className="details-button"
          onClick={() => this.props.openModal()}
        >
          DETAILS
        </Button>
        <Modal
          title={this.props.title}
          onOk={this.props.closeModal}
          onCancel={this.props.closeModal}
          okText="Submit"
          cancelText="Cancel"
          visible={this.props.modalOpen}
        >
          {this.props.details}
          <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <Dragger
            onChange={this.onUpload}
            action="http://mockbin.com/request?foo=bar&foo=baz"
            listType="picture"
            showUploadList={{ showPreviewIcon: false, showRemoveIcon: false }}
          >
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
          </div>
          {this.props.upload !== "" || this.props.claimed === true ? (
            <div
              style={{ textAlign: "center", fontSize: "18pt", fontWeight: "800" }}
            >
              <Icon 
                type={`${this.props.claimed ? "check-circle-o" : "loading"}`}
                style={{marginRight: "7px", color: `${this.props.claimed ? "#3dbd7d" : "#ffdd76"}`}}
              />{"  "}
              <span>
                {`${this.props.claimed
                ? "Approved"
                : "Awaiting Approval"}`}
              </span>
            </div>
          ) : null}
        </Modal>
      </Card>
    );
  }
}

export default BountyCard;
