import React, { useEffect, useRef, useState } from "react";
import './app.css';

const useCLick = ((onCLick) => {
  // if(typeof onCLick !== "function") {
  //   return;
  // };
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onCLick);
    }
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onCLick);
      }
    }
  }, [])
  return element;
})

const App = () => {

  // reference 는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법이다.
  const inputButton = useRef();
  // setTimeout(() => console.log(inputButton.current), 3000);
  // setTimeout(() => inputButton.current.focus(), 3000);

  // const title = useCLick();

  const sayHello = () => console.log("say helllo")
  const title = useCLick(sayHello);


  return (
    <div className="App">
      <h1 ref={title}>hello</h1>
      {/* <input ref={inputButton} placeholder="button"></input> */}
      {/* <input placeholder="button"></input> */}


    </div>
  );
};


export default App;