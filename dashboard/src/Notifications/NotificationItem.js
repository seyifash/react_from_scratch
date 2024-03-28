import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    render () {
        const {type, value, html, markAsRead, id} = this.props;
        return (
            <>
            {value && <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li>}
            {html && <li onClick={() => markAsRead(id)}data-notification-type={type} dangerouslySetInnerHTML={{__html: html}}></li>}
            </>
        )
    }
}

NotificationItem.propTypes  = {
    id: PropTypes.number,
    __html: PropTypes.shape({
        html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
};
NotificationItem.defaultProps = {
    type: 'default',
}
export default NotificationItem;