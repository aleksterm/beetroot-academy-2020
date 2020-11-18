import React from 'react';

const Teacher = ({ data: teacher, toggle, openId }) => (
  <div className='teacher mt-3'>
    <h4>{teacher.name}</h4>
    <button onClick={() => toggle(teacher._id)} className="btn btn-sm btn-secondary">
      {teacher._id === openId ? 'Hide teacher`s info' : 'Show teacher`s info'}
    </button>
    {teacher._id === openId
      ? <p>{teacher.text}</p>
      : null
    }
  </div>
)

export default Teacher;
