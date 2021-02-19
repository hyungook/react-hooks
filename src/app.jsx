import React, { useState } from 'react';
import './app.css';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
];



const useTabs = (initialTab, allTabs) => {
  const {currentIndex, setCurrentIndex} = useState(initialTab);

  if(!allTabs  || !Array.isArray(allTabs)) {
    return;
  }
  
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

const App = () => {
  const tabs = useTabs(0, content);
  const {currentItem} = useTabs(0, content);
  const {currentItecham, changeItem} = useTabs(0, content)


  console.log(currentItem)

  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
        // <button>{section.tab}</button>
      ))}
      {/* <div>{currentItem.content}</div> */}
      <div>{currentItem}</div>
    </div>
  );
};


export default App;