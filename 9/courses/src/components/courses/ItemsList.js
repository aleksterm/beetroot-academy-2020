import React  from 'react'
import Course from './Course';
import Teacher from './Teacher';
import withToggleId from '../../hoc/withToggleId';

const ItemsList = ({ items, type, ...rest }) => {
  let Item;

  if (type === 'courses') {
    Item = Course;
  } else if (type === 'teachers') {
    Item = Teacher;
  }

  return (
    <div className={type}>
      {items.map(item => (
        <Item key={item._id} data={item} {...rest} />
      ))}
    </div>
  )
}

export default withToggleId(ItemsList);
