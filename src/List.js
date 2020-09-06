import React from "react";

function List({ onItemRemove, onStatusChange, list }) {
  return (
    <ul className="list">
      {list.map((item) => (
        <li key={item.id} className="item">
          <p className={`${item.isDone ? "done" : "notDone"} item-name`}>
            {item.name}
          </p>

          <button onClick={() => onStatusChange(item.id)}>
            <i className="far fa-check-square fa-2x btn-done"></i>
          </button>
          <button onClick={() => onItemRemove(item.id)}>
            <i className="far fa-minus-square fa-2x btn-remove"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
