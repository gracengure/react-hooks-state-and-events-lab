import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDark, setIsDark] = useState(false);

  function handleDark() {
    setIsDark(!isDark);
  }

  const appClass = isDark ? "App dark" : "App light";

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>
          {isDark ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;