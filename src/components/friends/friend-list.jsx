import PropTypes from 'prop-types';
import './friend-list.css';
import FriendListItem from './friend-list-item';

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(item => {
                return (
                    <FriendListItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                )
            })}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array
};
