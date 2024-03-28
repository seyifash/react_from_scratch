import React from 'react';
import './Notifications.css';
import './NotificationItem';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
		return nextProps.length > this.props.listNotifications.length;
	}

  render() {
  const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer} = this.props;
    const handleButtonClick = () => {
      console.log('Close button has been clicked');
    };


    return (
      <div className="container">
        <div className='menuItem' onClick={handleDisplayDrawer}>
          <span>Your notifications</span>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            {listNotifications.length === 0 ? (
              <ul>
                <NotificationItem value="No new notification for now" />
              </ul>
            ) : (
              <>
                <button style={{ position: 'absolute', top: '5%', right: '10px', border: 'none', width: '11px', background: '#FFF' }} onClick={() => {handleButtonClick();
								handleHideDrawer();
							}} aria-label="close">
                  <img src={close} style={{ width: '100%' }} />
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                  {this.props.listNotifications.map(notification => (
                    <NotificationItem key={notification.id} id={notification.id} markAsRead={this.markAsRead} type={notification.type} value={notification.value} html={notification.html} />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

export default Notifications;