import React from "react";

function NewItem({ onNewItemAdd, onFilterChange, setValue, value }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      onNewItemAdd(value);
      setValue("");
    }
  };

  const handleSelectChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="new-text-input-label">
        <input
          autoFocus
          type="text"
          placeholder="Enter new task"
          aria-label="New task name"
          className="new-text-input"
          name="task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" aria-label="Add new task" className="btn-add">
          <i className="far fa-plus-square fa-2x"></i>
        </button>
      </label>
      <select
        onChange={handleSelectChange}
        name="todos"
        aria-label="Filter tasks"
        className="filter-select"
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
    </form>
  );
}

export default NewItem;
