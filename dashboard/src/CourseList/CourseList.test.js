import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


describe('checks for CourseList component', () => {
    it("renders CourseList component without crashing", () => {
        shallow(<CourseList />);
    });

    it('renders courses correctly', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];
    
        const wrapper = shallow(<CourseList listCourses={courses} />);
    const courseRows = wrapper.find('CourseListRow');

  // Ensure there is one header row for course name and one header row for credits
    const headerRows = courseRows.filterWhere(row => row.prop('isHeader'));
    expect(headerRows.length).toBe(2);

    // Ensure there is one row for each course
    const regularRows = courseRows.filterWhere(row => !row.prop('isHeader'));
    expect(regularRows.length).toBe(courses.length);

    // Check the data of the first header row for course name
    expect(headerRows.at(0).props().textFirstCell).toEqual('Available courses');

    // Check the data of the second header row for credits
    expect(headerRows.at(1).props().textFirstCell).toEqual('Course name');
    expect(headerRows.at(1).props().textSecondCell).toEqual('Credit');

    // Check the data of the first course row
    expect(regularRows.at(0).props().textFirstCell).toEqual('ES6');
    expect(regularRows.at(0).props().textSecondCell).toEqual(60);
    });

    it('renders correctly when passed a list of courses', () => {

        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];
    
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const courseRows = wrapper.find('CourseListRow');

    const regularRows = courseRows.filterWhere(row => !row.prop('isHeader'));
    expect(regularRows.length).toBe(courses.length);

    expect(regularRows.at(0).props().textFirstCell).toEqual('ES6');
    expect(regularRows.at(0).props().textSecondCell).toEqual(60);
    });
});