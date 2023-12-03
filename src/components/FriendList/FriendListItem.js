import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? 'online' : 'offline';

  return (
    <li className="friend-item">
      <span className={`status ${statusClassName}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
