import * as constant from "../../utils/constants";
import commentService from "../../services/commentService";

// Set dimention action
export const setDimensions = (dimensions) => ({
  type: constant.SET_DIMENSION,
  dimensions
});

// Set new point on image action
export const setNewPoint = (newPoint) => ({
    type: constant.SET_NEW_POINT,
    newPoint
});

// Set selected point of image action
export const setSelectedPoint = (selectedPoint) => ({
  type: constant.SET_SELECTED_POINT,
  selectedPoint
});

// Get all image action
export const getAllComments = (dimensions) => {
  return async (dispatch) => {
    await commentService.getAllComments()
    .then((response) => {
      if (response && response.status === 200) {

        let imageComments = [];
        let imagePoints = [];
        response.data.forEach(function(item, index) {
          if(!imageComments[response.data[index].imageId]) {
            imageComments[response.data[index].imageId] = [];
          }
          imageComments[response.data[index].imageId].push(item);

          if(!imagePoints[response.data[index].imageId]) {
            imagePoints[response.data[index].imageId] = [];
          }
          imagePoints[response.data[index].imageId].push(item.pointId);
        });
        
        // Dispatch the objects
        dispatch({
          type: constant.GET_COMMENTS,
          comments: imageComments
        });

        // Dispatch the objects
        dispatch({
          type: constant.SET_POINTS,
          points: imagePoints
        });
      }
    })
    .catch((e) => {
      console.log("Fetch all comments failed, ", e.message);
    });
  }
}

// Delete comment action
export const deleteComment = (deletedComment, comments, image, newPoints, pointId) => {
  return async (dispatch) => {
    await commentService.deleteComment(deletedComment.id)
      .then((response) => {
        if (response && response.status === 204) {
          const newComments = [];
          comments.forEach((singleComment) => {
            if (deletedComment.id !== singleComment.id) {
              newComments.push(singleComment);
            }
          });
          
          dispatch({
            type: constant.SET_COMMENTS,
            image,
            newPoints,
            newComments,
            pointId
          });
        }
      })
      .catch((e) => {
        console.log("Image delete failed, ", e.message);
      });
  }
}

// Add a comment of selected image action
export const setComments = (comment, email, image, points, pointId, allComments) => {
  return async (dispatch) => {
    const currentTime =  new Date().getTime();
    await commentService.addComment(comment, email, image, pointId, currentTime)
      .then((response) => {
        // If http status is 201 the redirect to image list page
        if (response && response.status === 201) {
          const imgComments = allComments ? allComments : [];
          const newComment = {
            id: response.data.id,
            comment: comment,
            email: email,
            time: currentTime,
            pointId,
          };
          const comments = [newComment, ...imgComments];          

          dispatch({
            type: constant.SET_COMMENTS,
            image,
            points,
            comments,
            pointId,
          });
        }
      })
      .catch((e) => {
        console.log("API failed to add comment ", e.message);
      });
  } 
}
