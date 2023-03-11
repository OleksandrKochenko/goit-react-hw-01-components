import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './friend-list.module.css';
import FriendListItem from './friend-list-item';

export default function FriendList({ friends }) {
    return (
        <ul className={clsx(css.friendList)}>
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
