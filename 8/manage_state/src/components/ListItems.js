import React, {Component} from 'react'
import Item from './Item';
import Filter from './Filter';

class ListItems extends Component {
    state = {
        searchTerm: "",
    }

    updateSearchTerm = event => {
        this.setState({ searchTerm: event.target.value });
    }

    get getBody() {
        const { searchTerm } = this.state;
        const { items, removeItem, toggleItem } = this.props;

        return items
            .filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(item => (
                <Item
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    toggleItem={toggleItem}
                />
            ))
    }

    render() {
        const { searchTerm } = this.state;
        const { title } = this.props;

        return (
            <section>
                <h3 className='mb-3'>{title}</h3>
                <Filter searchTerm={searchTerm} onChange={this.updateSearchTerm} />

                <ul className='list-group mb-3'>{this.getBody}</ul>
            </section>
        )
    }
}

export default ListItems;
