import React, { Component } from "react";

// Common InputTextbox component to create textbox dynamically
class InputTextbox extends Component {
  // Create a state from props
  state = {
    value: this.props.defaultValue || "",
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
        alert("Please type comment");
      }
    }
  };

  // Function will call on change
  onChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.props.onSearch(value);
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <input
        className="simpleInput"
        style={this.props.style}
        onKeyPress={this.onKeyPress}
        onChange={this.onChange}
        value={this.state.value}
        placeholder={this.props.placeholder || ""}
        autoFocus={this.props.autoFocus || false}
      />
    );
  }
}

// Export Button compoenent
export default InputTextbox;
