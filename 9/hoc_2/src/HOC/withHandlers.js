import React from 'react';

export default BaseComponent => {
  return class WithHandlers extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: props.initState
      }
      this.handleChange =  this.handleChange.bind(this);
      this.handleSubmit =  this.handleSubmit.bind(this);
    }

    handleChange = ({ target }) =>
      this.setState({
        data: { ...this.state.data, [target.name]: target.value }
      });

    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      this.setState({ data: this.props.initState });
    }

    render() {
      return (
        <BaseComponent 
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}
