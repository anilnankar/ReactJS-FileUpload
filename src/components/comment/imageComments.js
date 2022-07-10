import React, { Component } from "react";
import { connect } from "react-redux";
import BlankCenterDiv from "./blankCenterDiv";
import actions from "../../redux/actions";
import { timeDifference } from "../../utils/localStorage";
import styles from "../../styles";

// Creates a constant from actions and style
const { setSelectedPoint } = actions;
const style = styles.AllComments;

// ImageComments component to display all comments & respective image
class ImageComments extends Component {
  render() {
    // Creates a constant from props
    const { imageId, selectedPoint, comments, setSelectedPoint } = this.props;

    // Get the particular image comments from all comments
    let imageComments = comments[imageId];

    // Create comment componenet for each comment
    const commentComponent = (comment) => (
      <div
        key={comment.id}
        style={
          comment.pointId === selectedPoint
            ? style.selectedCommentComponent
            : style.commentComponent
        }
        onClick={(event) => {
          event.stopPropagation();
          setSelectedPoint(comment.pointId);
        }}
      >
        <div style={style.commentBody}>
          <span style={style.commentUser}>Email: {comment.email}</span>
          <span style={style.commentTime}>{timeDifference(comment.time)}</span>
        </div>
        <span style={style.commentSpan}>{comment.description}</span>
      </div>
    );

    return (
      <div className="comments">
        {imageComments && imageComments.length > 0 ? (
          imageComments.map(commentComponent)
        ) : (
          <BlankCenterDiv text="No Comments" />
        )}
      </div>
    );
  }
}

// This funtion will return comment data from redux store
function mapStateToProps(state) {
  const {
    dimensions,
    selectedImage,
    selectedPoint,
    comments,
    showAllComments,
  } = state.reducers;

  return {
    dimensions,
    selectedImage,
    selectedPoint,
    showAllComments,
    comments,
  };
}

// Connecting the component to the redux store & export ImageList component
export default connect(mapStateToProps, { setSelectedPoint })(ImageComments);
