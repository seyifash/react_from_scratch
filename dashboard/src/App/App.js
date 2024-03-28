import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import PropTypes from 'prop-types';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayDrawer : false
        };
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
    }


    listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
    ];
    
    listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'default', value: 'New course available' },
        { id: 3, type: 'urgent', html: getLatestNotification() }
    ];

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.props.logOut();
			}
		});
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key == 'h') {
                alert('Logging you out');
                this.props.logOut();
            }
        });
    }

    handleKeyDown = (event) => {
        if(event.ctrlKey && event.key === 'h') {
            alert('Logging you out')
            this.props.logOut();
        }
    }

    handleDisplayDrawer = () => {
        this.setState({ displayDrawer: true});
    }

    handleHideDrawer = () => {
        this.setSate({displayDrawer: false});
    }
    render() {
        return (
            <React.Fragment>
                <Notifications
                    listNotifications={this.listNotifications} 
                    displayDrawer={this.state.displayDrawer}
                    handleDisplayDrawer={this.handleDisplayDrawer}
                    handleHideDrawer={this.handleHideDrawer}
                    />
                <div className='App'>
                    <Header />
                    {this.props.isLoggedIn ? ( <BodySectionWithMarginBottom title='Course list'>
                        <CourseList listCourses={this.listCourses} /> 
                        </BodySectionWithMarginBottom>) : (
                            <BodySectionWithMarginBottom title='Log in to continue'>
                                <Login />
                            </BodySectionWithMarginBottom>
                        )}
                        <BodySection title='News from the School'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nulla nec eros vitae massa commodo aliquet id eu felis. 
                                Mauris pharetra vestibulum fermentum. Cras ultrices erat in diam vehicula, 
                                vel hendrerit eros dictum. Sed eget ultricies quam. Pellentesque habitant morbi tristique 
                                senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt, ligula a ultricies 
                                vestibulum, justo lorem lacinia mauris, nec aliquam ex lectus sed arcu. Aliquam erat volutpat. 
                                Donec nec nunc eu justo fermentum fermentum. Sed ultricies magna eget turpis faucibus, ut aliquet lorem 
                                gravida. Morbi varius ligula quis felis aliquet, sit amet tincidunt ligula venenatis. Duis congue nec orci at 
                                iaculis. In hac habitasse platea dictumst. Proin non feugiat enim, nec dignissim tortor. Sed tincidunt arcu 
                                eget risus lacinia, non gravida elit egestas. Phasellus sollicitudin odio nec interdum congue. Nulla facilisi.
                            </p>
                        </BodySection>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {
        return;
    },
};
App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

export default App