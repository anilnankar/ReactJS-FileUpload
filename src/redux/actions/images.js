import * as constant from "../../utils/constants";
import imagesService from "../../services/imageService";

// Get all image action
export const getAllImage = () => {
  return async (dispatch) => {
    await imagesService.getAllImages()
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
  }
}

// Add image action to upload
export const addImage = (file, filename) => {
  return async (dispatch) => {
    await imagesService.addImage(file, filename)
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
  };
}


// Delete image action
export const deleteImage = (image) => {
  return async (dispatch) => {
    try {
      await imagesService.deleteImage(image.id)
        .then((response) => {
          if (response && response.status === 204) {
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
}

// Set dimention action
export const changSelectedeImage = (id) => ({
  type: constant.CHANGE_SELECTED_IMAGE,
  id,
});
