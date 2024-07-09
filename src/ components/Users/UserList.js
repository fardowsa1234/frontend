import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  // Dummy data (replace with actual data fetching and rendering logic)
  const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com' },
  ];

  return (
    <div className="container">
      <h2 className="my-4">User List</h2>
      <div className="list-group">
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`} className="list-group-item list-group-item-action">
            {user.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
