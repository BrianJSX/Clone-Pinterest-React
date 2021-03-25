import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from '@material-ui/icons/Chat';
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <div className="navigation">
        <div className="navigation__logo">
          <img
            className="navigation__logo-box"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt="logo"
          />
        </div>
        <div className="navigation__nav">
          <ul className="navigation__nav-list">
            <li className="navigation__nav-item active"><b>Trang chủ</b></li>
            <li className="navigation__nav-item"><b>Người theo đang dõi bạn</b></li>
          </ul>
        </div>
        <div className="navigation__search">
          <div className="navigation__search-icon">
            <SearchIcon></SearchIcon>
          </div>
          <div className="navigation__search-input">
            <input type="text" placeholder="Tìm kiếm" className="input-search" />
          </div>
        </div>
        <div className="navigation__action">
          <div className="navigation__action-item">
            <NotificationsIcon></NotificationsIcon>
          </div>

          <div className="navigation__action-item">
            <ChatIcon></ChatIcon>
          </div>
          <div className="navigation__action-item">
            <Avatar className="avatar-icon"></Avatar>
          </div>
          <div className="navigation__action-item">
            <ExpandMoreIcon></ExpandMoreIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
