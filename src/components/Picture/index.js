import React from "react";
import "./style.css";
// import picture from './picture1.png';

function Picture(props) {
  return (
    <div className="card" onClick={props.userClick}>
        <img alt={props.id} src={props.image} />
    </div>
  );
}

export default Picture;
