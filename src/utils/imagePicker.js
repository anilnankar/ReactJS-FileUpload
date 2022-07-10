import React, { Component } from "react";

// ImagePicker component to upload file
class ImagePicker extends Component {

  // Function call on select a file 
  handleImageChange = (event) => {
    event.preventDefault();
    const { addImage } = this.props;
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      if (reader.result) {
        addImage(reader.result, file.name);
      }
    };

    reader.readAsDataURL(file);
  };
  render() {
    return (
      <div className="fileUpload">
        <input
          type="file"
          className="inputUpload"
          onChange={(e) => this.handleImageChange(e)}
        />
      </div>
    );
  }
}

// Export ImagePicker component
export default ImagePicker; 
