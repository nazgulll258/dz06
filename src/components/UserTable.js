
import React from "react";

const UserTable = ({ users, onDelete, onClear }) => {
    console.log(users);
  if (users.length === 0) {
    return <p>Таблица пуста</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>
              <button onClick={() => onDelete(index)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="6">
            <button onClick={onClear}>Очистить таблицу</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default UserTable;