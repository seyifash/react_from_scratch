import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if(isHeader) {
    return (
        <tr>
            { textSecondCell === null ?
            ( <th colSpan="2">{textFirstCell}</th>)
        : ( 
            <>
                <th className="header-cell">{textFirstCell}</th>
                <th className="header-cell">{textSecondCell}</th>
            </>
            )
            }
        </tr>
        );
    } else {
        return (
        <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
        );
    }
};


CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}

export default CourseListRow