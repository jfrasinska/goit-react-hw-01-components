import React from 'react';
import Profile from './Profile';

import user from '../user.json';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default App;
