const HOST_URL = 'http://localhost:3000'
const IMAGE_API_URL = `${HOST_URL}/comment`

class CommentService {

    getAllComments(imageId) {
        console.log(IMAGE_API_URL);
        return fetch(`${IMAGE_API_URL}/image.json`);
    }

    addImageComments(comment) {
        // return axios.post(`${IMAGE_API_URL}/`, comment);
    }
}

export default new CommentService();