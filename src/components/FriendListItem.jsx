import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className={css.friendItem}>
      {/* {isOnline ? statusActive : statusInactive} */}
      <span className={isOnline ? css.statusActive : css.statusInactive}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.prototype = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsListItem;
