import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './components/Users/UserList'; 
import UserDetail from './components/Users/UserDetail'; 
import UserForm from './components/Users/UserForm'; 
import PostList from './components/Posts/PostList'; 
import ProjectList from './components/Projects/ProjectList'; 
import ProjectMembershipList from './components/Projects/ProjectMembershipList'; 
import ProjectMembershipForm from './components/ProjectMembershipForm'; 

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Project Manager</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">Posts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/project-memberships">Project Memberships</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/users/create" element={<UserForm />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/project-memberships" element={<ProjectMembershipList />} />
            <Route path="/project-memberships/create" element={<ProjectMembershipForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
