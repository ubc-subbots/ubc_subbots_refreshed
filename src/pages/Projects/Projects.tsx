import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Subteam from '../../components/Subteam/Subteam.tsx';
import ProjectItem from '../../components/ProjectItem/ProjectItem.tsx';

import './Projects.css';



interface ProjectItemStruct {
    name: string;
    image: string;
    description: string;
    resources: string[]
}

interface Project {
    title: string;
    image: string;
    description: string;
    categories: string[];
    projects: ProjectItemStruct[];
}

function Projects() {

    const navigate = useNavigate();
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/data/projects.json')
        .then((res) => res.json())
        .then(setProjects)
        .catch(console.error);
    }, []);


    const autoSubteamProjects = projects.map((item) => {

        return (
            <section key={item.title} className="auto-subteam-project">

                <Subteam
                    title={item.title} 
                    projects={item.projects}
                    categories={item.categories} 
                    description={item.description} 
                    image={item.image}
                />


                <ProjectItem
                    projects={item.projects}
                />

            </section>
        );
    });


    return (
        <section className="Projects">

            <section className="title-card">

                {/* <div className="header">
                    <h1>PROJECTS</h1>
                </div> */}

                <section className="subteam-selector">

                    <a href='#Software' className="subteam-option" >
                        <img src="/images/steelhead_swimming.jpg" />
                        <div className="img-mask" />
                        <div className="content">
                            <h2><strong>Software</strong></h2>
                            <p>Create and refine subaquatic artificial intelligence</p>
                        </div>
                    </a>

                    <a href='#Electrical' className="subteam-option">
                        <img src="/images/steelhead_underwater.jpg" />
                        <div className="img-mask" />
                        <div className="content">
                            <h2><strong>Electrical</strong></h2>
                            <p>Design the interface between the computer and the sea</p>
                        </div>
                    </a>

                    <a href='#Mechanical' className="subteam-option">
                        <img src="/images/printing_tags.jpg" />
                        <div className="img-mask" />
                        <div className="content">
                            <h2><strong>Mechanical</strong></h2>
                            <p>Push the physical limits of underwater mechanics</p>
                        </div>
                    </a>

                </section>

            </section>


            {autoSubteamProjects !== undefined ? autoSubteamProjects : <></>}
            

        </section>
    );

}


export default Projects;