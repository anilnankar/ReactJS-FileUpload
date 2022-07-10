// Class of image
class Image {
    // Construct image object with respective props
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
    }
}

// Export image model
export default Image;