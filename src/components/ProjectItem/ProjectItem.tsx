import { useState } from 'react'

import './ProjectItem.css';



interface ProjectItemStruct {
    name: string;
    image: string;
    description: string;
    resources: string[];
    alt: string;
}


interface projectItemProps {
    projects: ProjectItemStruct[];
}

function ProjectItem({ projects }: projectItemProps) {

    if (projects.length === 0) return <></>

    const [currentProject, setCurrentProject] = useState<ProjectItemStruct>(projects[0])

    const optionHeaders = projects.map((item) => {
        return (
            <p 
                key={item.name} 
                className={`project-option ${currentProject.name === item.name ? "selected" : ""}`}
                onClick={() => setCurrentProject(item)}>
                
                {item.name}
            </p>
        );
    });

    const resources = currentProject.resources.map((item, index) => {
        return <div key={index}>{item}</div>
    });


    return (
        <section className="project-info">
            <div className="project-info-inner">

                <div className="option-header">
                    {optionHeaders}
                </div>

                <div className="option-display">

                    <img className="display" src={currentProject.image} alt={currentProject.alt} />
                    <div className="content">
                        <h3>{currentProject.name}</h3>

                        <div className="resources">
                            {resources}
                        </div>

                        <p>{currentProject.description}</p>
                    </div>

                </div>

            </div>
        </section>
    );
}


export default ProjectItem;