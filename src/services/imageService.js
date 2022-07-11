import axios from "axios";
import * as constant from "../utils/constants";

class ImageService {
  getAllImages() {
    try {
      return axios.get(`${constant.BASE_URL}/image`);
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  }

  addImage(file, filename) {
    try {
      // Construct request body
      let requestBody = {
        file: file,
        filename: filename,
      };

      // Set header of mulitpart 
      let headers = {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        type: "formData",
      };

      // Send post API call to server
      return axios.post(`${constant.BASE_URL}/image`, requestBody, { headers: headers });
    } catch (err) {
      console.log("Failed to upload image", err);
      throw err;
    }
  }

  deleteImage(id) {
    try {
      return axios.delete(`${constant.BASE_URL}/image/`+id);
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  }

}

export default new ImageService();
