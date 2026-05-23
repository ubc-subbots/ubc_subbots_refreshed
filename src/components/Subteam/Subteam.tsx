import SubbotsLogo from '../../assets/icons/subbots.svg?react';

import './Subteam.css';



interface ProjectItem {
    name: string;
    image: string;
    description: string;
    resources: string[]
}


interface subteamProps {
    title: string;
    projects: ProjectItem[];
    categories: string[];
    description: string;
    image: string;
}

function Subteam({ title, projects, categories, description, image }: subteamProps) {

    const categoryList = categories.map((item) => {
        return <p key={item}>{item}</p>
    });


    return (
        <section id={title} className="subteam">
            <SubbotsLogo className="background" />

            <div className="subteam-inner">

                <div className="subteam-header">

                    <h2><strong>{title}</strong></h2>
                    <div className="divider" />
                    <p>{projects.map((obj) => obj.name).join(" / ")}</p>

                </div>

                <div className="subteam-display">
                    <img src={image} />
                </div>

                <div className="subteam-content">

                    <div className="content-left">
                        {categoryList}
                    </div>

                    <div className="content-right">
                        <p className="content-text-large">{description}</p>
                    </div>

                </div>

            </div>
        </section>
    );
}


export default Subteam;