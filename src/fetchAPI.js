import React from "react";
import axios from "axios";

export default class FetchAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      colorList: [],
    };
    this.getColor = this.getColor.bind(this);
    this.setColor = this.setColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setColor(color) {
    this.setState((prev) => ({
      color: color,
      colorList: [...prev.colorList, color],
    }));

    console.log(this.state.color);
    console.log(this.state.colorList);
  }

  getColor() {
    axios
      .get(`https://www.colr.org/json/color/random?${new Date().getTime()}`)
      .then((response) => {
        if (response.data.new_color) {
          console.log(response.data);
          this.setColor(response.data.new_color);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick() {
    this.getColor();
  }

  render() {
    return <></>;
  }
}
