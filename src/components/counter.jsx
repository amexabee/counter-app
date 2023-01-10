import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div class="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value ? false : true}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
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
