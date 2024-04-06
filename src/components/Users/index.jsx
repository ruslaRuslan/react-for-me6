import { useState } from "react";
import "./index.css";
import axios from "axios";
import PageContainer from "../PageContainer";
const url = 'https://jsonplaceholder.typicode.com/users'
let componentYarandimi = false;
const Users = () => {
  const [users, setUsers] = useState([]);
  const [isDark, setIsDark] = useState(false);

  if (componentYarandimi === false) {
    axios.get(url).then(({ data }) => {
      setUsers(data);
      componentYarandimi = true;
      let fromStorage = localStorage.getItem("isDark");
      setIsDark(fromStorage === "true" ? true : false);
    });
  }

  return (
<PageContainer>
<div className={isDark ? "darkContainer" : null}>
      <button
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("isDark", !isDark);
        }}
      >
        {isDark ? "☀" : "🥮"}
      </button>

      {users.map((user) => (
        <div key={user.id}>
          <h1>
            <button
              onClick={() =>
                setUsers(users.filter((_user) => _user.id !== user.id))
              }
            >
              x
            </button>
            {user.username}
          </h1>
        </div>
      ))}
    </div>
</PageContainer>
  );
};

export default Users;
