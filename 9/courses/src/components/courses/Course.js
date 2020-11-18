import React from 'react';
import CourseDescription from './CourseDescription';

const Course = ({ data: course, toggle, openId }) => (
  <div className="mt-3">
    <h3>{course.title}</h3>
    <button onClick={() => toggle(course._id)} className="btn btn-primary">
        {openId === course._id ? "Hide description" : "Show description"}
    </button>
    {openId === course._id ? <CourseDescription course={course} /> : null}
  </div>
);

export default Course;
