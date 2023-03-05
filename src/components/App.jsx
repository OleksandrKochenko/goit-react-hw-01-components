import Profile from './profile/profile';
import user from './user.json';
import Statistics from './statistic/statistic';
import data from './data.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title='Upload stats'
        stats={data}
      />
    </div>
  );
};
