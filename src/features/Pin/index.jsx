import React from "react";

import "./style.scss";

function Pin(props) {
  return (
    <div className="pin">
      <img
        className="pin__image"
        src={props.photo.src.medium}
        alt="pin-image"
      />
      <div className="pin__icon">
        <a className="pin__icon--save" href={props.photo.src.original} download>
          Lưu
        </a>
        <a className="pin__icon--download" href="#">
          {/* <PublishIcon></PublishIcon> */}
        </a>
        <a className="pin__icon--action" href="#">
          {/* <MoreHorizIcon></MoreHorizIcon> */}
        </a>
      </div>
    </div>
  );
}
export default Pin;
