import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [friends, setFriend] = useState(data);
  const handleClearList = () => setFriend([]);

  return (
    <main>
      <section className="container">
        <h3>{friends.length} Birthdays Today</h3>
        <section>
          {friends.map((friend) => (
            <List key={friend.key} friend={friend} />
          ))}
        </section>
        <button onClick={handleClearList}>Clear List</button>
      </section>
    </main>
  );
}

export default App;
