import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div
      style={{
        border: "5px dashed darkgrey",
        width: "400px",
        margin: "0 10px",
      }}
    >
      <h1>Users</h1>
      {users.map((user) => (
        <h6 key={user.id}>{user.name}</h6>
      ))}
    </div>
  );
};

export default UserList;
