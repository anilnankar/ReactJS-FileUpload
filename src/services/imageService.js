const HOST_URL = 'http://localhost:3000'
const IMAGE_API_URL = `${HOST_URL}/data`

class ImageService {

    getAllImages() {
        console.log(IMAGE_API_URL);
        return fetch(`${IMAGE_API_URL}/image.json`);
    }

    uploadImage(image) {
        // return axios.post(`${IMAGE_API_URL}/`, image);
    }
}

export default new ImageService();