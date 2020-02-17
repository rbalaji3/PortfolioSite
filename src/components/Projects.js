import React from 'react';
import projectList from './projects.json';

const Projects = () => {
  return (
    <div className="projects">
      {projectList.map(co => <div>{co.name}</div>)}
    </div>
  );
}

export default Projects;