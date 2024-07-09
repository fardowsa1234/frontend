import React from 'react';

const ProjectMembershipList = () => {
  // Dummy data (replace with actual data fetching and rendering logic)
  const memberships = [
    { id: 1, projectId: 1, userId: 1, role: 'Admin' },
    { id: 2, projectId: 1, userId: 2, role: 'Member' },
  ];

  return (
    <div className="container">
      <h2 className="my-4">Project Membership List</h2>
      <ul className="list-group">
        {memberships.map((membership) => (
          <li key={membership.id} className="list-group-item">
            Project ID: {membership.projectId}, User ID: {membership.userId}, Role: {membership.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectMembershipList;
