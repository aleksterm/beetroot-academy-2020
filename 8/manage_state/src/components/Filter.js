import React from 'react'

const Filter = ({onChange, searchTerm}) => (
  <div className='mb-3'>
      <input
          type="text"
          className='form-control'
          onChange={onChange}
          value={searchTerm}
      />
  </div>
)

export default Filter;
