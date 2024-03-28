/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';

describe('test case for App js', () => {
    it('test that App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });

    it('should contain the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toBe(true);
    });
    
    it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
    });


    it('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
    });

    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    it('should not display CourseList initially', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });

    describe('when isLoggedIn is true', () => {
    it('should not include Login component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login')).toHaveLength(0);
    });

    it('should include CourseList component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    });
    });
})

describe('when Ctrl+h pressed', () => {
	it('checks logOut function is called', () => {
		const mockFn = jest.fn();
		const wrapper = mount(<App logOut={mockFn} />);
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });

		document.dispatchEvent(event);
		expect(mockFn).toHaveBeenCalled();
		wrapper.unmount();
	});

	window.alert = jest.fn();
	it('checks alert function is called', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalled();
		spy.mockRestore();
		wrapper.unmount();
	});

	it('checks alert string is "Logging you out"', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalledWith('Logging you out');
		jest.restoreAllMocks();
		wrapper.unmount();
	});
	window.alert.mockClear();
});
   
describe('testing state of App.js', () => {
	it('displayDrawer initial value should be set to false', () => {
		const wrapper = mount(<App />);

		expect(wrapper.state().displayDrawer).toBe(false);
	});

	it('should set displayDrawer to true after calling handleDisplayDrawer', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();

		expect(wrapper.state().displayDrawer).toBe(true);
	});

	it('should set displayDrawer to false after calling handleHideDrawer', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleHideDrawer();

		expect(wrapper.state().displayDrawer).toBe(false);
	});
});