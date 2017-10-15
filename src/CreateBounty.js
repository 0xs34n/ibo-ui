import React, { Component } from 'react';
import Modal from "antd/lib/modal";

class CreateBounty extends Component {
  render() {
    return (
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
    );
  }
}

export default CreateBounty;