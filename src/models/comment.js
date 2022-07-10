// Class of comment
class Comment {
    // Construct comment object with respective props
    constructor(data) {
        this.id = data.id;
        this.email = data.email;
        this.message = data.message;
        this.datetime = data.datetime;
    }
}

// Export comment model
export default Comment;