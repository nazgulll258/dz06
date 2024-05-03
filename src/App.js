
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const clearTable = () => {
    setUsers([]);
  };

  return (
    <div>
      <UserForm onSubmit={addUser} />
      <UserTable users={users} onDelete={deleteUser} onClear={clearTable} />
    </div>
  );
};

export default App;