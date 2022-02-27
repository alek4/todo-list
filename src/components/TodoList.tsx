import React, { useState } from "react";

export const TodoList: React.FC = () => {
  const [list, setList] = useState<String[]>([]);
  const [text, setText] = useState("");

  return (
    <>
      <ul>
        {list.map((l, i) => (
          <li key={i}>
            {l}
            <button
              onClick={(e) => {
                const removeItem = list.filter((_, index) => {
                  return index !== i;
                });
                setList(removeItem);
              }}
            >
              D
            </button>
          </li>
        ))}
      </ul>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          setList([...list, text]);
        }}
      >
        Cliccami
      </button>
    </>
  );
};
