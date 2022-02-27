import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Weather } from "./components/Weather";

function App() {
  

  return (
    <div>
      <Weather></Weather>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
