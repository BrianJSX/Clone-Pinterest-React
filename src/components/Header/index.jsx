import Avatar from "@material-ui/core/Avatar";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Notification from "../../features/Notification";
import Message from "../../features/Message";
import Search from '../../features/SearchForm';

import "./style.scss";

function Header() {
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
    setMessage(false);
  };

  const handelMessage = () => {
    setMessage(!message);
    setNotification(false);
  };

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
            <NavLink
              to="/"
              className="navigation__nav-item"
              activeClassName="active"
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/flowpage"
              className="navigation__nav-item"
              activeClassName="active"
            >
              Người theo dõi bạn
            </NavLink>
          </ul>
        </div>
        <Search></Search>
        <div className="navigation__action">
          <div className="navigation__action-item">
            <div onClick={handleNotification}>
              <NotificationsIcon></NotificationsIcon>
            </div>
            {notification && <Notification></Notification>}
          </div>
          <div className="navigation__action-item">
            <div onClick={handelMessage}>
              <ChatIcon></ChatIcon>
            </div>
            {message && <Message></Message>}
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
