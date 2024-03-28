import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';


const CourseList = ({ listCourses }) => {
    return (
        <div className="courseTable">
            <table id="CourseList">
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Available courses"/>
                    <CourseListRow  isHeader={true} textFirstCell="Course name" textSecondCell="Credit" /> 
                </thead>
                <tbody>
                    {listCourses.length > 0 ? (
                        listCourses.map(courses =>  (
                    <CourseListRow key={courses.id} textFirstCell={courses.name} textSecondCell={courses.credit} />
                        ))
                        ) : (
                    <CourseListRow textFirstCell="No course available yet"/>)}
                </tbody>
            </table>
        </div>
    )
}


CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}
export default CourseList
