import axios from "axios";
import * as constant from "../utils/constants";

// Create acttions of redux
const actions = {
   // Get all image action
   getAllImage: () => {
    return async (dispatch) => {
      try {
        axios
          .get(
            `${constant.BASE_URL}/image`
          )
          .then((response) => {
            if (response && response.status === 200) {
              // Dispatch the objects
              dispatch({
                type: constant.GET_IMAGES,
                images: response.data
              });
            }
          })
          .catch((e) => {
            console.log("Fetch all images failed, ", e.message);
          });
      } catch (err) {
        // send to custom analytics server
        throw err;
      }
    }
  },

  // Add image action to upload
  addImage: (file, filename) => {
    return (dispatch) => {
      try {
          // Construct request body
          let requestBody = {
            'file': file,
            'filename': filename
          }

          let headers = {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "type": "formData"
          };

          // Send post API call to server
          axios
          .post(`${constant.BASE_URL}/image`, requestBody, {headers: headers})
          .then((response) => {

            // If http status is 201 the redirect to image list page
            if (response && response.status === 201) {
              console.log("Image uploaded successfully");
              if(response.data && response.data.id) {
                dispatch({
                  type: constant.ADD_IMAGE,
                  newImage: {
                    id: response.data.id,
                    file,
                  },
                });
              }
            }
          })
          .catch((e) => {
            console.log("API failed to upload image", e.message);
          });
      } catch (err) {
        console.log("Failed to upload image", err);
        throw err;
      }
    };
  },

  // Change selected image
  changSelectedeImage: (id) => ({
    type: constant.CHANGE_SELECTED_IMAGE,
    id,
  }),

  // Edit image action
  editImage: (image) => ({
    type: constant.EDIT_IMAGE,
    image,
  }),

  // Delete image action
  deleteImage: (image) => {
    return (dispatch) => {
      try {
        axios
          .delete(
            `${constant.BASE_URL}/image/`+image.id
          )
          .then((response) => {
            if (response && response.status === 200) {
              // Dispatch the objects
              dispatch({
                type: constant.DELETE_IMAGE,
                image,
              });
            }
          })
          .catch((e) => {
            console.log("Image delete failed, ", e.message);
          });
      } catch (err) {
        // send to custom analytics server
        throw err;
      }
    }
  },

  // Toggel image action
  toggleOptions: (key, value) => ({
    type: constant.TOGGLE_OPTIONS,
    key,
    value,
  }),

  // Set dimention action
  setDimensions: (dimensions) => ({
    type: constant.SET_DIMENSION,
    dimensions,
  }),

  // Set new point on image action
  setNewPoint: (newPoint) => ({
    type: constant.SET_NEW_POINT,
    newPoint,
  }),

  // Set selected point of image action
  setSelectedPoint: (selectedPoint) => ({
    type: constant.SET_SELECTED_POINT,
    selectedPoint,
  }),

  // Get all image action
  getAllComments: () => {
    return async (dispatch) => {
      try {
        axios
          .get(
            `${constant.BASE_URL}/comment`
          )
          .then((response) => {
            if (response && response.status === 200) {

              let imageComments = [];
              let imagePoints = [];
              response.data.forEach(function(item, index) {
                console.log("item",item);
                console.log("index",index);
                if(!imageComments[response.data[index].imageId]) {
                  imageComments[response.data[index].imageId] = [];
                }
                imageComments[response.data[index].imageId].push(item);

                if(!imagePoints[response.data[index].imageId]) {
                  imagePoints[response.data[index].imageId] = [];
                }
                imagePoints[response.data[index].imageId].push(item.pointId);
              });
              
              console.log("imageComments",imageComments);
              console.log("imagePoints",imagePoints);

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
      } catch (err) {
        // send to custom analytics server
        throw err;
      }
    }
  },

  // Delete comment action
  deleteComment: (deletedComment, comments, image, newPoints, pointId) => {
    return (dispatch) => {
      try {
        console.log(deletedComment);
        axios
          .delete(
            `${constant.BASE_URL}/comment/`+deletedComment.id
          )
          .then((response) => {
            if (response && response.status === 200) {
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
      } catch (err) {
        // send to custom analytics server
        throw err;
      }
    }
  },

  // Add a comment of selected image action
  setComments: (comment, email, image, newPoints, pointId, allComments) => {
    return (dispatch) => {
      try {
        const time =  new Date().getTime();
        // Construct request body
        let requestBody = {
          'email': email,
          'description': comment,
          'imageId': image.id,
          'pointId': pointId,
          'time': time
        }

        // Send post API call to server
        axios
          .post(`${constant.BASE_URL}/comment`, requestBody)
          .then((response) => {
            // If http status is 201 the redirect to image list page
            if (response && response.status === 201) {
              if(response.data && response.data.id) {

                const newComment = {
                  id: response.data.id,
                  comment: comment,
                  email: email,
                  time: time,
                  pointId,
                };
                const newComments = [newComment, ...allComments];          

                dispatch({
                  type: constant.SET_COMMENTS,
                  image,
                  newPoints,
                  newComments,
                  pointId,
                });
              }
            }
          })
          .catch((e) => {
            console.log("API failed to add comment ", e.message);
          });
      } catch (err) {
        console.log("Failed to upload image", err);
        throw err;
      }
    };
  }
};

// Export actions
export default actions;
