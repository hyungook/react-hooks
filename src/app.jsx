import React, { useEffect, useState } from "react";
import './app.css';


const App = () => {

const [number, setNumber] = useState(0);
const [aNumber, swtAnumber] = useState(0);

const sayHello = () => console.log("hello")

// useEffect(() => {
//   sayHello();
// })
// useEffect(sayHello, [number]);
useEffect(sayHello, []);

// useEffect는 ComponentDidMount, ComponentWillMonut, ComponentDidUpdate 이다.

  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => swtAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};


export default App;