import React, { Component } from "react";
import $ from "jquery";
import bsCustomFileInput from "bs-custom-file-input";

class SubmitCard extends Component {
  state = {
    selectAttachment: "",
    uploadFiles: "",
    textbox: "",
    none: "",
    uploadedFiles: [],
    textboxContent: "",
  };

  handleSelectChange = (e) => {
    this.setState({
      selectAttachment: "",
      uploadFiles: "",
      textbox: "",
      none: "",
      uploadedFiles: "",
      textboxContent: "",
      [e.target.id]: e.target.value,
      [e.target.value]: "true",
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    $(document).ready(function () {
      bsCustomFileInput.init();
    });
    const uploadFiles = this.state.uploadFiles ? (
      <div className="form-group">
        <label htmlFor="uploadedFiles">Upload Files</label>
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="uploadedFiles"
            onChange={this.handleChange}
            multiple
          />
          <label class="custom-file-label" for="customFile">
            Choose file
          </label>
        </div>
      </div>
    ) : null;
    const textbox = this.state.textbox ? (
      <div className="form-group">
        <label htmlFor="textboxContent">Type Text</label>
        <textarea class="form-control" rows="3" id="textboxContent"></textarea>
      </div>
    ) : null;
    return (
      <div class="card">
        <div class="card-body">
          <h2>Submit Assignment</h2>
          <form>
            <p>
              <i>Submitting as {this.props.cardProps.profile.userName}</i>
            </p>
            <div class="form-group">
              <label for="selectAttachment">Attach Work</label>
              <select
                class="form-control"
                id="selectAttachment"
                onChange={this.handleSelectChange}
              >
                <option disabled selected>
                  -- Select --
                </option>
                <option value="uploadFiles">Upload Files</option>
                <option value="textbox">Textbox</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="selectAttachmentForm">
              {uploadFiles} {textbox}
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitCard;
