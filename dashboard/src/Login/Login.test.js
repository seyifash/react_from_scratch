import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';

describe('Login Component', () => {
    it('should render without crashing', () => {
       const wrapper =  shallow(<Login />);
       expect(wrapper.exists()).toBe(true);
    });

    it('should render 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});

describe('test for submit input on form', () => {

	it('should be enabled when password and email have value', () => {
		const wrapper = shallow(<Login />);
		const email = {
			target: {
				name: 'email',
				value: 'email',
			},
		};
		const password = {
			target: {
				name: 'password',
				value: 'password',
			},
		};

		wrapper.find({ name: 'email' }).simulate('change', email);
		wrapper.find({ name: 'password' }).simulate('change', password);
		expect(wrapper.find('.submit').prop('disabled')).toBe(false);
	});
});