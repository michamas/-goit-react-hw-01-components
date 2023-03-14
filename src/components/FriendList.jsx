import PropTypes from 'prop-types';
import './FriendList.css';


const FriendsList = ({title, friends =[]}) => {
    return (
        <section>
        {friends.length > 0 ? (
          <>
            {title && <h2 className="title">{title}</h2>}

            <ul className="friend-list">
              {friends.map(friend => (
                <li
                  key={friend.id}
                  className="friend-item"
                >
                    {/* {friends.isOnline ? statusActive : statusInactive} */}
                    <span className=''></span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>    
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>NO FRIENDS</p>
        )}
      </section>
      )
}

FriendsList.prototype = {
    title: PropTypes.string,
    friends : PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    )
}

export default FriendsList;