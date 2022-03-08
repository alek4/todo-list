import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const TodoList: React.FC = () => {
  const [list, setList] = useState<String[]>([]);
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col bg-gray-100 pt-6 pb-3 px-6 rounded-lg h-min">
      <div className="flex items-center gap-3 mb-3">
        <input
          className="py-2 rounded-md px-3 shadow-md"
          placeholder="Enter new to do"
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-white rounded-full px-3 py-1 shadow-md"
          onClick={() => {
            setText("");
            setList([...list, text]);
          }}
        >
          +
        </button>
      </div>

      <ul>
        {list.map((l, i) => (
          <li
            key={i}
            id={i.toString()}
            className="flex justify-between items-center mb-2 border-b pb-2 border-gray-300"
          >
            <div className="text-lg">
              <input
                onChange={() => {
                  const el = document.getElementById(i.toString());

                  if (el!.style.textDecoration === "line-through") {
                    el!.style.textDecoration = "none";
                  } else {
                    el!.style.textDecoration = "line-through";
                  }
                }}
                type="checkbox"
                className="w-4 h-4 mx-3 rounded cursor-pointer"
              />
              {l}
            </div>
            <button
              className="px-3 py-1"
              onClick={() => {
                const removeItem = list.filter((_, index) => {
                  return index !== i;
                });
                setList(removeItem);
              }}
            >
              <FaTrashAlt></FaTrashAlt>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
