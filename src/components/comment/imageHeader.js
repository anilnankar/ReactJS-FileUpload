import React, { Component } from "react";
import styles from "../../styles";

const style = styles.ImageHeader;

export default class ImageHeader extends Component {
  state = {
    editable: false,
    name: this.props.image.name,
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.image.name !== nextProps.image.name) {
      this.setState({ editable: false, name: nextProps.image.name });
    }
  }
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
