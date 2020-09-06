import React, { useState, useEffect, useMemo } from "react";
import List from "./List";
import NewItem from "./NewItem";
import "./app.css";

import uniqid from "uniqid";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) ?? []
  );
  const [value, setValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const filteredItems = useMemo(() => {
    switch (selectedFilter) {
      case "done":
        return list.filter((item) => item.isDone);
      case "notDone":
        return list.filter((item) => !item.isDone);
      default:
        return list;
    }
  }, [list, selectedFilter]);

  const handleNewItemAdd = (value) => {
    setList([...list, { name: value, isDone: false, id: uniqid() }]);
  };

  const toggleItemStatus = (id) => {
    setList((prevList) => {
      const i = prevList.findIndex((item) => item.id === id);
      const itemToUpdate = prevList[i];
      const item = { ...itemToUpdate, isDone: !itemToUpdate.isDone };
      const newList = [...list];
      newList[i] = item;
      return newList;
    });
  };

  const removeItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">to-do list</h1>
      </header>
      <NewItem
        onNewItemAdd={handleNewItemAdd}
        onFilterChange={setSelectedFilter}
        setValue={setValue}
        value={value}
      />
      <List
        onItemRemove={removeItem}
        onStatusChange={toggleItemStatus}
        list={filteredItems}
      />
    </div>
  );
}

export default App;
