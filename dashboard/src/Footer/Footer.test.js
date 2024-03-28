import React from 'react';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';

describe('test case for App js', () => {
    it('test that Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should contain the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
})
