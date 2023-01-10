import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div class="container">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
