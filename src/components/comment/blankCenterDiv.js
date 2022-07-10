import React from "react";

// Blank center div style
const style = {
  width: "100%",
  height: "500px",
  color: "white",
  marginTop: "20px",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2em",
};

// Export the JSX with style
export default ({ text }) => <div style={style}>{text}</div>;
