import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import ImageApp from "./components/images/imageApp";
import store from "./redux/store";

// Function of App with provider of Redux Store & import ImageApp
function App() {
  // Return image App with store
  return (
    <Provider store={store}>
      <div className="App">
        <ImageApp />
      </div>
    </Provider>
  );
}

// Export App
export default App;
