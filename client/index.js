import React from "react";
import { render } from "react-dom";

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  console.log(" starting ");

  React.useEffect(() => {
    fetch("/api/users").then((response) =>
      response.json().then((data) => {
        setUsers(data);
        setLoading(false);
      })
    );
  }, []);

  if (loading) {
    return "....loading";
  }

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

render(<App />, document.querySelector("#root"));
