import React, { Component } from "react";
import { connect } from "react-redux";
import BlankCenterDiv from "../comment/blankCenterDiv";
import ImagePreview from "../comment/imagePreview";
import ImageFooter from '../comment/imageFooter';
import * as actions from "../../redux/actions";
import styles from "../../styles";

// Creates a constant from actions
const {
  setDimensions,
  deleteImage,
  setNewPoint,
  setSelectedPoint
} = actions;
const style = styles;

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
      changSelectedeImage,
      deleteImage
    } = this.props;

    // If image not selected then return empty div
    if (notSelected) {
      return <BlankCenterDiv text={notSelected} />;
    }

    // Create constant for points of particular image
    const imgPoints = points[image.id] ? [...new Set(points[image.id])] : [];
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
      changSelectedeImage,
      deleteImage
    };

    return (
      <div
        onClick={(event) => {
          event.stopPropagation();
          changSelectedeImage(image);
          setSelectedPoint(null);
        }}
      >
        <div style={style.imageBody}>
          <div
            style={{
              height: dimensions.height,
            }}
          >
            <ImagePreview {...imagePreViewProps} />
          </div>
        </div>
        <ImageFooter
            image={image}
            deleteImage={deleteImage}
            setSelectedPoint={setSelectedPoint}
          />
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
  // if (!selectedImage) {
  //   return {
  //     notSelected: "Please Select a Picture or Upload a Image",
  //   };
  // }
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
  deleteImage,
  setNewPoint,
  setSelectedPoint
})(ImagePoint);
