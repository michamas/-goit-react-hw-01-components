import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendsListItem from './FriendListItem';

const FriendsList = ({ title, friends = [] }) => {
  return (
    <>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className="list">
        {friends.map(friend => (
          <FriendsListItem {...friend} key={friend.id}></FriendsListItem>
        ))}
      </ul>
      {title && <p className={css.bottomBar}></p>}
    </>
  );
};

FriendsList.prototype = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendsList;
