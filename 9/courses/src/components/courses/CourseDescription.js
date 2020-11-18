import React from 'react';
import { default as TeachersList } from './ItemsList';
import withToggle from '../../hoc/withToggle';

const CourseDescription = ({ course, isOpen, toggle }) => {
  return (
  <div className='container course'>
    <p className='description'>
      {course.description}
    </p>

    <button onClick={() => toggle()} className="btn btn-sm btn-success">
        {isOpen ? "Hide teachers" : "Show teachers"}
    </button>
    {isOpen
      ? <TeachersList items={course.teachers} type='teachers' />
      : null
    }
  </div>
)}

export default withToggle(CourseDescription);
