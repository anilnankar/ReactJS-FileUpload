import React, { Component } from "react";
import styles from "../../styles";

// Creates a constant from style
const style = styles.ImageFooter;

// ImageFooter component to display all delete button of image
export default class ImageFooter extends Component {  
  render() {
    const { image, deleteImage } = this.props;
    return (
      <div style={style.main}>
        <button
          className="simpleButton"
          style={style.deleteButton}
          onClick={() => deleteImage(image)}
        >
          Delete Image
        </button>
      </div>
    );
  }
}
