import React from "react";
import "./App.css";

function App() {
  return (
    <main className="main">
      <div className="wrapper">
        <h1>Todos: </h1>
        <div className="todo-list">
          <ul>
            <li>
              <span>
                <input type="checkbox" />
                clean the room
              </span>
              <span>remove</span>
            </li>
            <li>
              <span>
                <input type="checkbox" />
                order stuffs from shopee
              </span>
              <span>remove</span>
            </li>
            <li>
              <span>
                <input type="checkbox" />
                make a call
              </span>
              <span>remove</span>
            </li>
            <li>
              <span>
                <input type="checkbox" />
                have lunch
              </span>
              <span>remove</span>
            </li>
          </ul>
        </div>
        <div className="add-todos">
          <input type="text" name="" id="" />
          <button className="add">Add more</button>
        </div>
      </div>
    </main>
  );
}

export default App;
