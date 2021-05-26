import React from "react";
import axios from "axios";

export default class FetchAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      colorList: [],
      value: [],
    };
    this.getColor = this.getColor.bind(this);
    this.setColor = this.setColor.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setColor(color) {
    const filteredList = this.state.colorList.filter(
      (newcolor) => newcolor !== color
    );
    this.setState(() => ({
      color: color,
      colorList: [...filteredList, color],
    }));

    console.log(this.state.color);
    console.log(this.state.colorList);
  }

  getColor() {
    axios
      .get(
        `https://www.colr.org/json/color/random?1187573334?${new Date().getTime()}`
      )
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
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <></>;
  }
}
