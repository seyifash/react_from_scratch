import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('Course row components test', () => {
        it(' test the component renders one cell with colspan = 2 ', () => {
                const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
                expect(wrapper.find('th')).toHaveLength(1);
                expect(wrapper.find('th').prop('colSpan')).toEqual('2');
        });

        it('should render two cells when isHeader is true and textSecondCell is present', () => {
                const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2"/>);
                expect(wrapper.find('th')).toHaveLength(2);
        });
        it('should render correctly two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2"/>);
        expect(wrapper.find('td')).toHaveLength(2);
        });
});