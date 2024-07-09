import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  // Dummy user data (replace with actual data fetching and rendering logic)
  const user = { id: parseInt(id), username: 'john_doe', email: 'john@example.com' };

  return (
    <div className="container">
      <h2 className="my-4">User Detail</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Username: {user.username}</h5>
          <p className="card-text">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
