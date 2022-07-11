import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImageList from "./imageList";
import ImageUpload from "./imageUpload";
import "./imageApp.css";

// ImageApp component will display the routes
class ImageApp extends Component {
  render() {
    // Return the routes
    return (
      <div className="ImageApp">
        <Router>
          <div>
            <ul id="imageMenu">
              <li>
                <Link to="/">Upload</Link>
              </li>
              <li>
                <Link to="/imageList">Images</Link>
              </li>
            </ul>
          </div>
          <div id="imageRoutes"></div>
          <hr />
          <Routes>
            <Route exact path="/" element={<ImageUpload />} />
            <Route path="/imageList" element={<ImageList />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

// Export ImageApp component
export default ImageApp;
