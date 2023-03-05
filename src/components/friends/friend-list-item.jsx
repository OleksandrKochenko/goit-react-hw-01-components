import PropTypes from 'prop-types';
import './friend-list.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    const spanBulletClasses = ["status"];
    if (isOnline) {
        spanBulletClasses.push("online");
    }
    return (
        <li className="friend-item">
            <span className={spanBulletClasses.join(" ")}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}