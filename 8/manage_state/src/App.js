import React, {Component} from 'react';
import { defaultState } from './data';
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';

class App extends Component {
    state = {
        items: defaultState,
    }

    addItem = newItem => this.setState(({ items }) => ({
        items: [newItem, ...items]
    }))

    removeItem = id => this.setState(({ items }) => ({
        items: items.filter(item => item.id !== id)
    }))

    toggleItem = toggledItem => this.setState(({ items }) => ({
        items: items.map(item => item.id !== toggledItem.id
            ? item : {...toggledItem, packed: !toggledItem.packed}
        )
    }));

    markAllPacked = () => this.setState(({ items }) => ({
        items: items.map(item => ({ ...item, packed: true }))
    }))

    markAllUnPacked = () => this.setState(({ items }) => ({
        items: items.map(item => ({ ...item, packed: false }))
    }))

    render() {
        const { items } = this.state;
        const packedItems = items.filter(item => item.packed)
        const unpackedItems = items.filter(item => !item.packed)

        return (
            <div className='container py-3'>
                <h2>TODO list:</h2>
                <br/>
                <NewItem addItem={this.addItem} />

                <div className='row'>
                    <div className='col-md-5'>
                        <ListItems
                            title="Active items"
                            items={unpackedItems}
                            toggleItem={this.toggleItem}
                            removeItem={this.removeItem}
                        />
                    </div>
                    <div className='offset-md-2 col-md-5'>
                        <ListItems
                            title="Completed items"
                            items={packedItems}
                            toggleItem={this.toggleItem}
                            removeItem={this.removeItem}
                        />
                    </div>
                </div>
                <button className='btn btn-success btn-lg btn-block' onClick={this.markAllPacked}>Mark all as packed</button>
                <button className='btn btn-danger btn-lg btn-block' onClick={this.markAllUnPacked}>Mark all as unpacked</button>
            </div>
        )
    }
}

export default App;
