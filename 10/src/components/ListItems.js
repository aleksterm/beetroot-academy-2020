import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

const ListItems = ({ title, items }) => {
  const [search, setSearch] = useState('');

  const updateFilter = ({ target }) => setSearch(target.value);

  const getBody = () => {
    let out = [...items];
    if (search) {
      out = out.filter(item =>
        item.value.toLowerCase().includes(search.toLowerCase())
      );
    }
    return out.map(item => <Item title={title} item={item} key={item.id} />);
  }

  return (
    <section>
      <h3 className="mb-3">Title</h3>
      <Filter filter={search} onChange={updateFilter} />

      <ul className="mb-3 p-0">{getBody()}</ul>
    </section>
  );
}

export default ListItems;
