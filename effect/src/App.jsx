import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

function App() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${count}`)
      .then((resp) => resp.json())
      .then((json) => setUser(json));
  }, [count]);

  return (
    <div className="App">
      <div className="container-users">
        {/* {users.map((user) => {
          return (
            <Card key={user.id} title={user.title} img={user.thumbnailUrl} />
          );
        })} */}
        <Card
          user={user}
          title={user.title}
          img={user.thumbnailUrl}
        />
      </div>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
