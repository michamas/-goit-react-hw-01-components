import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList'

import user from './data/user.json';
import data from './data/data.json';
import friends  from './data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',

        // backgroundColor: 'grey',
      }}
    >
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList title="Friends online" friends={friends}/>
    </div>
  );
};
