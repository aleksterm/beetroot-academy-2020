import React from 'react';

export default Component => {
  return class WithToggleId extends React.Component {
    state = {
      openId: false
    }

    toggle = id =>
      this.setState(({ openId }) => ({
        openId: openId === id ? null : id
    }))

    render() {
      return <Component {...this.props} {...this.state} toggle={this.toggle} />
    }
  }
}
