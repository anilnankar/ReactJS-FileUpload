import React, { Component } from "react";
import { connect } from "react-redux";
import ImagePicker from "../../utils/imagePicker";
import * as actions from "../../redux/actions";
import "./imageUpload.css";

// Creates a constant from actions
const { addImage, setSelectedPoint } = actions;

// ImageUpload component to upload new image
class ImageUpload extends Component {

  render() {
    return (
      <div>
        <div className="dropzone">
          "Drag and drop file here"
        </div>
        <div
          className="uploadfile"
          onClick={() => {
            setSelectedPoint(null);
          }}
        >
          <ImagePicker addImage={this.props.addImage} />
        </div>
      </div>
      
    );
  }
}

// This funtion will return images data from redux store
function mapStateToProps(state) {
  const images = state.reducers.images;
  return { images };
}

// Connecting the component to the redux store & export ImageUpload component
export default connect(mapStateToProps, {
  addImage,
})(ImageUpload);
