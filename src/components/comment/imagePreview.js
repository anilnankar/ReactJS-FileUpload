import React, { Component } from "react";
import ReactCursorPosition from "react-cursor-position";
import Measure from "react-measure";
import Point from "./point";
import { setPoint } from "../../utils/localStorage";
import styles from "../../styles";

// Creates a constant from style
const style = styles.ImagePreview;

// ImagePreview component to measure and take cursor point
class ImagePreview extends Component {

  // Function of set new point
  setComment = function (event, image) {
    const { dimensions, setNewPoint, changSelectedeImage } = this.props;
    changSelectedeImage(image);
    event.stopPropagation();
    const newPoint = setPoint(dimensions, this.currentPosition);
    if (newPoint) {
      setNewPoint(newPoint);
    }
  };

  render() {
    // Create constant from props
    const {
      dimensions,
      image,
      imgPoints,
      selectedPoint,
      showPoints,
      newPoint,
      setDimensions,
      setSelectedPoint,
      changSelectedeImage
    } = this.props;

    return (
      <div style={style.main}>
        <Measure bounds onResize={(measure) => setDimensions(measure.bounds)}>
          {({ measureRef }) => (
            <div>
              <ReactCursorPosition
                onPositionChanged={(currentPosition) =>
                  (this.currentPosition = currentPosition)
                }
              >
                <div onClick={(event) => this.setComment(event, image)}>
                  <div style={style.commentDiv}>
                    <img
                      style={style.mainImage}
                      alt="#"
                      ref={measureRef}
                      src={image.filepath}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
                      }}
                      className="img"
                    />
                  </div>
                  <div style={style.commentDiv}>
                    {
                    imgPoints && imgPoints.map((point) => (
                      <Point
                        id={point}
                        key={point}
                        dimensions={dimensions}
                        showPoints={showPoints}
                        selectedPoint={selectedPoint}
                        setSelectedPoint={setSelectedPoint}
                        changSelectedeImage={changSelectedeImage}
                        image={image}
                      />
                    ))
                    }
                    {newPoint ? (
                      <Point
                        id={newPoint}
                        key={newPoint}
                        dimensions={dimensions}
                        showPoints={showPoints}
                        newPoint
                        selectedPoint={selectedPoint}
                        setSelectedPoint={setSelectedPoint}
                        changSelectedeImage={changSelectedeImage}
                        image={image}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </ReactCursorPosition>
            </div>
          )}
        </Measure>
      </div>
    );
  }
}

// Export ImagePreview compoenent
export default ImagePreview;