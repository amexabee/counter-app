import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.props.counter.value ? 'primary' : 'warning text-dark';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value ? value : 'zero';
  }
}

export default Counter;
