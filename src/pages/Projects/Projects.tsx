import { useState, useEffect } from 'react';
import Subteam from '../../components/Subteam/Subteam.tsx';
import ProjectItem from '../../components/ProjectItem/ProjectItem.tsx';

import './Projects.css';



interface ProjectItemStruct {
    name: string;
    image: string;
    description: string;
    resources: string[];
    alt: string;
}

interface Project {
    title: string;
    image: string;
    description: string;
    categories: string[];
    projects: ProjectItemStruct[];
}

function Projects() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/data/projects.json')
        .then((res) => res.json())
        .then(setProjects)
        .catch(console.error);
    }, []);


    function scrollToSubteam(title: string) {
        document.getElementById(title)?.scrollIntoView({ behavior: 'smooth' });
    }


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
                    
                    <div onClick={() => scrollToSubteam('Software')} className="subteam-option" >
                        <img src="/images/rviz.jpg" />
                        <div className="img-mask" />
                        <div className="content">
                            <h2><strong>Software</strong></h2>
                            <p>Create and refine subaquatic artificial intelligence</p>
                        </div>
                    </div>

                    <div onClick={() => scrollToSubteam('Electrical')} className="subteam-option">
                        <img src="/images/soldering_pcb.jpg" />
                        <div className="img-mask" />
                        <div className="content">
                            <h2><strong>Electrical</strong></h2>
                            <p>Design the interface between the computer and the sea</p>
                        </div>
                    </div>

                    <div onClick={() => scrollToSubteam('Mechanical')} className="subteam-option">
                        <img src="/images/steelhead_upshot.jpg" />
                        <div className="img-mask" />
                        <div className="content">
                            <h2><strong>Mechanical</strong></h2>
                            <p>Push the physical limits of underwater mechanics</p>
                        </div>
                    </div>

                </section>

            </section>


            {autoSubteamProjects !== undefined ? autoSubteamProjects : <></>}
            

        </section>
    );

}


export default Projects;