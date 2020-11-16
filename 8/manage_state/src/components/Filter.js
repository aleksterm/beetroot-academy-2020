import React, {Component} from 'react'

class Filter extends Component {
    render() {
        return (
            <div className='mb-3'>
                <input
                    type="text"
                    className='form-control'
                    onChange={this.props.onChange}
                    value={this.props.searchTerm}
                />
            </div>
        )
    }
}

export default Filter;
