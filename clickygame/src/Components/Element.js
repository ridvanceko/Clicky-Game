import React from "react";
function Element(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.img ? `url(${props.img})` : "none"
      }}
    >
      
    </div>
  );
}
export default Card;