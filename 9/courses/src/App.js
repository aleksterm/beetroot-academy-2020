import React from 'react';
import courses from './data';
import { default as CoursesList } from './components/courses/ItemsList';

const App = props => (
  <div className="container">
    <CoursesList items={courses} type='courses' />
  </div>
);

export default App;
