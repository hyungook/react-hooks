import React, { useState } from 'react';
import './app.css';


const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) =>{
    console.log(event.target);
  }
  return {value, onChange};
}

const App = () => {
const name = useInput("Mr.")
  return (
    <>
    <h1>hello</h1>
    {/* <input placeholder="Name" value={name.value} />   */}
    {/* <input placeholder="Name" value={name.value} onChange={name.onChange} />   */}
    {/* 아래와 같이 작성할 수 있다. / 아래와 같이 작성하면 name 안에 있는 모든 것들을 풀어준다. 따라서 name은 name.value가 되어 똑같아진다 */}
    <input placeholder="Name" {...name} />
    </>
  );
}


export default App;