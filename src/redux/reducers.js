import * as constant from "../utils/constants";

// Create state constant from local storage
const initState = {
  images: [],
  comments: {},
  points: {},
  selectedImage: {
    "id": 1657281237811,
    "file": "data:image/png;base64"
  },
  dimensions: {
    "top": 564,
    "right": 476,
    "bottom": 970,
    "left": 70,
    "width": 406,
    "height": 406
  },
  newPoint: null,
  selectedPoint: null,
  showAllComments: true,
  showPoints: true
}

// Export image reducer
export default function imageReducer(state = initState, action) {
  // Manage the state according to action type
  switch (action.type) {
    // Images list add in state
    case constant.GET_IMAGES: {
      return {
        ...state,
        images: action.images
      };
    }

    // Add new entry in images state
    case constant.ADD_IMAGE: {
      const { points, comments } = state;
      points[action.newImage.id] = [];
      comments[action.newImage.id] = [];
      return {
        ...state,
        images: [action.newImage, ...state.images],
        points,
        comments,
        selectedImage: action.newImage,
        newPoint: null,
        selectedPoint: null,
      };
    }

    // Update selected image in state
    case constant.CHANGE_SELECTED_IMAGE: {
      return {
        ...state,
        selectedImage: action.id,
        newPoint: null,
        selectedPoint: null,
      };
    }

    // Edot image in state
    case constant.EDIT_IMAGE: {
      const newImages = [];
      state.images.forEach((image) => {
        if (image.id === action.image.id) {
          newImages.push(action.image);
        } else {
          newImages.push(image);
        }
      });
      return {
        ...state,
        images: newImages,
      };
    }

    // Delete image and update the state
    case constant.DELETE_IMAGE: {
      const newImages = [];
      state.images.forEach((image) => {
        if (image.id !== action.image.id) {
          newImages.push(image);
        }
      });
      const { points, comments } = state;
      points[action.image.id] = [];
      comments[action.image.id] = [];
      return {
        ...state,
        images: newImages,
        points,
        comments,
        selectedImage: "",
      };
    }

    // Update toggle option in state
    case constant.TOGGLE_OPTIONS: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }

    // Update dimention in state
    case constant.SET_DIMENSION: {
      return { ...state, dimensions: action.dimensions };
    }

    // Cretae new point in state
    case constant.SET_NEW_POINT: {
      return {
        ...state,
        newPoint: action.newPoint,
        selectedPoint: action.newPoint,
      };
    }

    // Update selected point in state
    case constant.SET_SELECTED_POINT: {
      return {
        ...state,
        selectedPoint: action.selectedPoint,
        newPoint: null,
      };
    }

    // Images list add in state
    case constant.SET_POINTS: {
      return {
        ...state,
        points: action.points
      };
    }

    // Images list add in state
    case constant.GET_COMMENTS: {
      const newState = {
        ...state,
        comments: action.comments
      };
      return newState;
    }
    
    // Add comment in state
    case constant.SET_COMMENTS: {
      const id = action.selectedImage.id;
      const { points, comments } = state;
      points[id] = action.points;
      comments[id] = action.comments;
      return {
        ...state,
        points,
        comments,
        newPoint: action.newPoint,
      };
    }
    default:
      return state;
  }
}
