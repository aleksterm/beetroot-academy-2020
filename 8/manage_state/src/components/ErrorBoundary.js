import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null
    }
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  // componentDidCatch(error, errorInfo) {
  //   this.setState({ error })
  // }

  render () {
    if (this.state.error) {
      return (
        <div className='alert alert-warning'>
          Something went wrong:
          <details>
            {this.state.error.toString()}
          </details>
        </div>
      );
    }
    
    return this.props.children;    
  }
}

export default ErrorBoundary;
