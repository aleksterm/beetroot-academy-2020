import React, { useState } from 'react'
import Item from './Item';
import Filter from './Filter';

const ListItems = ({ items, removeItem, toggleItem, title }) => {
  const [search, setSearch] = useState("");

  const updateSearchTerm = event => {
    setSearch(event.target.value);
  }

  return (
    <section>
        <h3 className='mb-3'>{title}</h3>
        <Filter searchTerm={search} onChange={updateSearchTerm} />

        <ul className='list-group mb-3'>
          {items
            .filter(item => item.value.toLowerCase().includes(search.toLowerCase()))
            .map(item => (
              <Item
                  key={item.id}
                  item={item}
                  removeItem={removeItem}
                  toggleItem={toggleItem}
              />
            ))}
        </ul>
    </section>
  )
}

export default ListItems;
