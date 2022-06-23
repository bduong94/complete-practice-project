import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUserHandler = (user) => {
    setUsersList((prev) => [...prev, user]);
  };

  return (
    <div>
      <AddUser addNewUserHandler={addNewUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
