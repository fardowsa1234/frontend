import React from 'react';

const ProjectList = () => {
  // Dummy data (replace with actual data fetching and rendering logic)
  const projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
  ];

  return (
    <div className="container">
      <h2 className="my-4">Project List</h2>
      <ul className="list-group">
        {projects.map((project) => (
          <li key={project.id} className="list-group-item">
            <h5>{project.name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
