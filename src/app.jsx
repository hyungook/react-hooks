import React, { useState } from "react";

const item = [
  {
    title: "section1",
    content: "I'm the content of the Section 1"
  },
  {
    title: "section2",
    content: "I'm the content of the Section 2"
  },
  {
    title: "section3",
    content: "I'm the content of the Section 3"
  }
];
// in: 초기 탭 initialTab, 탭 리스트 out: 탭 리스트 아이템 , set인덱스
const useTab = (initialTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx
  };
};

const App = () => {

  const { currentItem, changeItem } = useTab(0, item);
  return (
    <div className="App">
      <h1>useTabs</h1>
      <div>
        {item.map((section, index) => (
          <button key={index} onClick={section => changeItem(index)}>{section.title}</button>
        ))}
      </div>
      <div>{currentItem.content}</div>
    </div>
  );
};


export default App;