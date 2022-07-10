import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer } from "react-router-redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";

// Define middlewares
const middlewares = [thunk];

// Creacte redux store
const store = createStore(
  combineReducers({
    reducers,
    router: routerReducer,
  }),
  compose(applyMiddleware(...middlewares))
);

// Export redux store
export default store;
