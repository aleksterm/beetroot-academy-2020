import React, { useState } from 'react'
import { generate as id } from 'shortid';

const NewItem = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleSubmit = event => {
      event.preventDefault();
      addItem({id: id(), value, packed: false });
      setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-md-10'>
                <input
                    type="text"
                    className='form-control mb-3'
                    onChange={handleChange}
                    value={value}
                />
            </div>
            <div className='col-md-2'>
                <input className='btn btn-success' type="submit" value='Send' />
            </div>
        </div>
    </form>
  )
}

export default NewItem;
