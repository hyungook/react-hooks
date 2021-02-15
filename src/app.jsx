import React, { Component, useState } from 'react';
import './app.css';

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => {setItem(item + 1);}
  const decrementItem = () => {setItem(item - 1);}
  return (
    <>
    <div>{item}</div>
    <button onClick={incrementItem}>Increment</button>
    <button onClick={decrementItem}>Decrement</button>
    </>
  );
}


class UppUgly extends Component {
  state = {
    item: 1
  }
  render() {
    const {item} = this.state;
    return (
      <div className={"App"}>
        <h1>{item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () =>{
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }
  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  }
}

export default App;

// export default UppUgly;
