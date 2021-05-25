import React from "react";
import FetchAPI from "./fetchAPI";

export default class Home extends FetchAPI {
  render() {
    const TextStyle = {
      color: "#" + this.state.color,
      fontSize: 100,
    };

    const ColorList = this.state.colorList.map((color) => (
      <li className="list-style" key={color} style={{ color: "#" + color }}>
        {"#" + color}
      </li>
    ));

    return (
      <>
        <div style={TextStyle}>Colored Text</div>
        <button className="get-button" onClick={this.handleClick}>
          Get Color
        </button>
        <div>{ColorList}</div>
      </>
    );
  }
}
