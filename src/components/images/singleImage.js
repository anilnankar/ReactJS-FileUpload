import React, { Component } from "react";
import ImageComments from "../comment/imageComments";
import ImagePoint from "./imagePoint";

// SingleImage component to display immage points and comments
class SingleImage extends Component {
  render() {
    // Creates a constant from props
    const { image, changSelectedeImage } = this.props;

    // Return single image view
    return (
      <div>
        <div className="image">
          <ImagePoint image={image} changSelectedeImage={changSelectedeImage}/>
        </div>
        <div className="imageComments">
          <ImageComments imageId={image.id} />
        </div>
      </div>
    );
  }
}

// Export SingleImage component
export default SingleImage;
