import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('test case for Header js', () => {

    it('verify that Header renders without carshing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('verify that Header renders without carshing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});