import React, { useState } from 'react';
import ProjectCard from '../components/filter/projectCard';
import ProjectsNavbar from '../components/filter/Projectnavbar';
import ProjectData from '../data';

function Projects() {
    const [projects, setProjects] = useState(ProjectData);
    const [active, setActive] = useState('all');

    // handle filter catagory
    const handlerFilterCategory = (category) => {
        if (category === 'all') {
            setProjects(ProjectData);
            setActive(category);
            return;
        }

        // filter  array
        const newArray = ProjectData.filter((project) => project.category.includes(category));
        setProjects(newArray);
        setActive(category);
    };

    return (
        <div className="container">
            <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
            <div className="filter_row_card">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
