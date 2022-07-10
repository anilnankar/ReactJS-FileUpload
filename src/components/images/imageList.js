import React, { Component } from "react";
import { connect } from "react-redux";
import SingleImage from "./singleImage";
import actions from "../../redux/actions";
import "./imageList.css";

// Creates a constant from actions
const { getAllImage, getAllComments, changSelectedeImage, setSelectedPoint } = actions;

// ImageList component to display all images & respective comments
class ImageList extends Component {
  
  async componentDidMount() {
    console.log("componentDidMount");
    this.props.getAllImage();
    this.props.getAllComments();
  }

  // Render image list
  render() {
    // Create constant from props
    const { images, changSelectedeImage, setSelectedPoint  } = this.props;

    let imagesList;
    if (images && images.length > 0) {
      imagesList = <ul>
        {
          images.map((image) => (
            <li key={image.id}>
              <SingleImage
                key={image.id}
                image={image}
                changSelectedeImage={changSelectedeImage}
              />
            </li>
          ))
        }
      </ul>;
    } else {
      imagesList = <div> Images are not uploaded </div>;
    }

    // Return single image
    return (
      <div
        onClick={() => {
          setSelectedPoint(null);
        }}
      >
        <div className="imageList">
          {imagesList }          
        </div>
      </div>
    );
  }
}

// This funtion will return images list from redux store
function mapStateToProps(state) {
  const images = state.reducers.images;
  return { images };
}

// Connecting the component to the redux store & export ImageList component
export default connect(mapStateToProps, {
  getAllImage,
  getAllComments,
  changSelectedeImage,
  setSelectedPoint,
})(ImageList);
