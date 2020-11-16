import React, {Component} from 'react'
import './Item.css'

class Item extends Component {
    render() {
        const { item } = this.props;

        return (
            <li className="item-box list-group-item">
                <div className='form-check'>
                    <input
                        type="checkbox"
                        className='form-check-item'
                        checked={item.packed}
                        id={item.id}
                        onChange={() => this.props.toggleItem(item)}
                    />
                    <label className='form-check-label' htmlFor={item.id}>
                        {item.value}
                    </label>
                </div>
                <button className='btn btn-danger btn-sm' onClick={() => this.props.removeItem(item.id)}>Remove</button>
            </li>
        )
    }
}

export default Item;
