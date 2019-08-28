import React from "react";
import "./style.css";
// import picture from './picture1.png';

function Picture(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Picture;
