import axios from "axios";
import * as constant from "../utils/constants";

class CommentService {
  getAllComments() {
    try {
      return axios.get(`${constant.BASE_URL}/comment`)
    } catch (err) {
      throw err;
    }
  }

  addComment(comment, email, image, pointId, currentTime) {
    try {      
        // Construct request body
        let requestBody = {
          'email': email,
          'description': comment,
          'imageId': image.id,
          'pointId': pointId,
          'time': currentTime
        }
  
        // Send post API call to server
        return axios.post(`${constant.BASE_URL}/comment`, requestBody);

    } catch (err) {
      throw err;
    }
  }

  deleteComment(id) {
    try {
      return axios.delete(`${constant.BASE_URL}/comment/`+id)
    } catch (err) {
      throw err;
    }
  }

}

export default new CommentService();
