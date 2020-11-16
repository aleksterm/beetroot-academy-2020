import React, {Component} from 'react'
import { generate as id } from 'shortid';

class NewItem extends Component {
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { value } = this.state;
        this.props.addItem({id: id(), value, packed: false });
        this.setState({ value: '' });
    }

    render() {
        const { value } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='row'>
                    <div className='col-md-10'>
                        <input
                            type="text"
                            className='form-control mb-3'
                            onChange={this.handleChange}
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
}

export default NewItem;
