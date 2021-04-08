import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./style.scss";

export class LoadingSpinner extends Component {
  render() {
    return (
      <div className="spinner-container" style={{ minHeight: "100vh" }}>
        <Loader type="Circles" color="#E1540F" height={80} width={80} />
        <p>{this.props.text ? this.props.text : "Please wait"}</p>
      </div>
    );
  }
}

export default LoadingSpinner;
