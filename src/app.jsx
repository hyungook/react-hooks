import React, { useEffect, useRef, useState } from "react";
import './app.css';


  const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", {});
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return {enablePrevent, disablePrevent}
  }

const App = () => {
  const {enablePrevent, disablePrevent}  = usePreventLeave();
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
      {/* <button onClick={confirmDelete}>Delete the World</button> */}
    </div>
  );
};


export default App;