import React from "react";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import EditIcon from "@material-ui/icons/Edit";
// import SearchIcon from "@material-ui/icons/Search";
import "./style.scss";

export default function Message() {
  return (
    <div className="message">
      <div className="message__header">
        <div className="message__header__text"></div>
        <div className="message__header__text">Hộp thư đến</div>
        <div className="message__header__action">
          <div className="message__header__action-item">
            {/* <MoreHorizIcon></MoreHorizIcon> */}
          </div>
          <div className="message__header__action-item">
            {/* <EditIcon></EditIcon> */}
          </div>
        </div>
      </div>
      <div className="message__content">
        <h1>Chia sẻ ý tưởng với bạn bè</h1>
      </div>
      <div className="message__search">
        <div className="message__search-icon">
          {/* <SearchIcon></SearchIcon> */}
        </div>
        <div className="message__search-input">
          <input type="text" placeholder="Tìm kiếm" className="input-search" />
        </div>
      </div>
    </div>
  );
}
