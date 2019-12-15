import React, { Component } from "react";
class Wrapper extends Component {
  // Setting the component's initial state
  state = {
    elements: [
      { img: './img/', id: "a" },
      { img: './img/', id: "b" },
      { img: './img/', id: "c" },
      { img: './img/', id: "d" },
      { img: './img/', id: "e" },
      { img: './img/', id: "f" },
      { img: './img/', id: "g" },
      { img: './img/', id: "h" },
      { img: './img/', id: "i" },
      { img: './img/', id: "j" },
      { img: './img/', id: "k" },
      { img: './img/', id: "l" }
    ],
    clickedElements: []
  };
  handleOnClick = event => {
    // Getting the value and name of the input which triggered the change
    const { img, value } = event.target;
    this.state.clickedElements.push({ img: img, id: value });
    console.log(this.state.clickedElements);
  };
  render() {
    return (
      <div>
        {this.state.elements.forEach(element => {
          <Element />;
        })}
        <button value="aaaa" id= "bbbb" onClick={this.handleOnClick}>Click</button>
      </div>
    );
  }
}
export default Wrapper;
