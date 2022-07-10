import React, { Component } from "react";

// Button component to create button dynamically
class Button extends Component {
  // Create a state from props
  state = {
    value: this.props.value || "button",
    title: this.props.title || "Button",
  };

  // Function will call on key press
  onKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const { value } = this.state;
      if (value && value.length > 0 && this.props.onSearch) {
        this.props.onSearch(value);
        if (this.props.clearOnSearch) {
          this.setState({ value: "" });
        }
      } else {
        alert("Please type something");
      }
    }
  };

  render() {
    return (
      <button
        className="simpleButton"
        style={this.props.style}
        onKeyPress={this.onKeyPress}
        value={this.state.value}
        onClick={this.props.onClickCall}
      >
        {this.state.title}
      </button>
    );
  }
}

// Export Button compoenent
export default Button;