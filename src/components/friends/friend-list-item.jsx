import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './friend-list.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={clsx(css.friendItem)}>
            <span className={clsx(css.status, {[css.online]: isOnline})}></span>
            <img className={clsx(css.avatar)} src={avatar} alt="User avatar" width="48" />
            <p className={clsx(css.name)}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}