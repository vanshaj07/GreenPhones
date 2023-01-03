import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import DropzoneComponent from "./Dropzone";

class ConfirmationModal extends Component {
  constructor(props) {
    super(props);
    //disabled property is used for disable "Yes" button after one click
    this.state = {
     // disable: false
     file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFileSelect = (files) => {
    this.setState({ file: files ? files[0]: files });
  };

  handleSubmit() {
    this.props.toggle();
    this.props.submitUpload(this.state.file);
  }
  
  render() {
    return (
      <Modal
        isOpen={this.props.confirmModal}
        toggle={this.props.toggle}
        backdrop={true}
        size={"lg"}
        style={{ width: "50%", marginTop: "12%" }}
      >
        <ModalHeader toggle={this.props.toggle}>Upload Image</ModalHeader>
        <ModalBody>
        <DropzoneComponent
                     onFileSelect = {this.onFileSelect}
                     onFileRemove = {()=>{}}
                     multiple = {false}
                     acceptFileType = {'.jpg,.JPG,.JPEG,.PNG,.png'}
                     msg ={"Upload image Only!"}
                     reset={false}
                     clearForm={()=>{}}
                  />
          {/* <span>
            <p align="center" className="mt-3">
              <b>
             Are you sure.
              </b>
            </p>
            <p align="center">
              <b>test</b>
            </p>
          </span> */}
          <div style={{ marginLeft: "40%" }}>
              <Button
                color="primary"
                className="mt-4"
                style={{"background-color":"#83C801", border: "#83C801"}}
                onClick={() => this.handleSubmit()}
              >
                Yes
              </Button>{" "}
              <Button
                color="secondary"
                className="mt-4"
                style={{"background-color":"#83C801", border: "#83C801"}}
                onClick={this.props.toggle}
              >
                NO
              </Button>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default ConfirmationModal;
