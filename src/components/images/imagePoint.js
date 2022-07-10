import React, { Component } from "react";
import { connect } from "react-redux";
import BlankCenterDiv from "../comment/blankCenterDiv";
import ImagePreview from "../comment/imagePreview";
import actions from "../../redux/actions";

// Creates a constant from actions
const {
  setDimensions,
  editImage,
  deleteImage,
  setNewPoint,
  setSelectedPoint,
  toggleOptions,
} = actions;

// ImagePoint component to create new image point 
class ImagePoint extends Component {
  render() {

    // Creates a constant from props
    const {
      image,
      dimensions,
      notSelected,
      points,
      selectedPoint,
      newPoint,
      showPoints,
      setDimensions,
      setNewPoint,
      setSelectedPoint,
      changSelectedeImage
    } = this.props;

    // If image not selected then return empty div
    if (notSelected) {
      return <BlankCenterDiv text={notSelected} />;
    }

    // Create constant for points of particular image
    const imgPoints = points[image.id];
    const imagePreViewProps = {
      dimensions,
      image,
      imgPoints,
      selectedPoint,
      newPoint,
      showPoints,
      setDimensions,
      setNewPoint,
      setSelectedPoint,
      changSelectedeImage
    };

    console.log("imagePreViewProps", imagePreViewProps);
    return (
      <div
        onClick={(event) => {
          event.stopPropagation();
          setSelectedPoint(null);
        }}
      >
        <div
          style={{
            height: dimensions.height,
          }}
        >
          <ImagePreview {...imagePreViewProps} />
        </div>
      </div>
    );
  }
}

// This funtion will return comment data from redux store
function mapStateToProps(state) {
  const {
    dimensions,
    images,
    selectedImage,
    points,
    selectedPoint,
    newPoint,
    showPoints,
    showAllComments,
  } = state.reducers;
  if (images.length === 0) {
    return {
      notSelected: "Please  upload a new Image",
    };
  }
  if (!selectedImage) {
    return {
      notSelected: "Please Select a Picture or Upload a Image",
    };
  }
  return {
    dimensions,
    selectedImage,
    points: points,
    selectedPoint,
    newPoint,
    showPoints,
    showAllComments,
  };
}

// Connecting the component to the redux store & export ImagePoint component
export default connect(mapStateToProps, {
  setDimensions,
  editImage,
  deleteImage,
  setNewPoint,
  setSelectedPoint,
  toggleOptions,
})(ImagePoint);
