import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Home.css';
import SubbotsLogo from '../../assets/icons/subbots.svg?react';
import Arrow from '../../assets/icons/arrow.svg?react';

import Model from '../../components/Model/Model.tsx';
import SponsorHighlightPanel from '../../components/Sponsors/HighlightPanel.tsx';



function Home() {

    const navigate = useNavigate();


    return (
        <section className="Home">



            <div className="playable-thumbnail">
                
                <div className="content">
                    <SubbotsLogo />
                    <h1>Subbots</h1>
                </div>

            </div>



            <section className="about">
                <div className="about-inner">

                    <div className="content">
                        <h2>Meet <span>Steelhead</span></h2>
                        <h4>
                            UBC Subbots is a student-led team that designs and builds autonomous underwater 
                            vehicles (AUVs) for the annual RoboSub competition in San Diego. We develop 
                            systems for navigation, waterproofing, hydrodynamics, and mechanical actuation, 
                            integrating expertise from engineering and computer science.
                        </h4>
                    </div>

                    <div className="display">
                        <Model backgroundColor={'transparent'} rotateSpeed={1.5} />
                    </div>

                </div>
            </section>



            <section className="joinus">
                <div className="joinus-inner">

                    <SubbotsLogo className="background" />

                    <div className="content">
                        <h2>Build <span><br />Underwater Robots</span></h2>
                        <h4>
                            At UBC Subbots, we embrace students from all backgrounds and provide hands-on 
                            learning in a supportive, beginner-friendly environment.
                        </h4>
                        <button className="button-primary">
                            Join Us
                            <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                    </div>

                    <div className="display">
                        <img src="/images/steelhead_swimming.jpg" alt="Subbots robot swimming at surface of competition pool with yellow cable attached" />
                    </div>

                </div>
            </section>



            <section className="subteams">
                <div className="subteams-inner">

                    <h1>SUBTEAMS</h1>
                    <div className="divider"></div>

                    <div className="subteam-panel">

                        <div className="subteam-card" onClick={() => navigate("/projects")}>
                            <div className="card-display">
                                <img src="/images/printing_tags.jpg" />
                                <div className="img-mask"></div>
                            </div>
                            <div className="card-content">
                                <h2>Software</h2>
                                <Arrow />
                            </div>
                        </div>

                        <div className="subteam-card" onClick={() => navigate("/projects")}>
                            <div className="card-display">
                                <img src="/images/printing_tags.jpg" />
                                <div className="img-mask"></div>
                            </div>
                            <div className="card-content">
                                <h2>Electrical</h2>
                                <Arrow />
                            </div>
                        </div>

                        <div className="subteam-card" onClick={() => navigate("/projects")}>
                            <div className="card-display">
                                <img src="/images/printing_tags.jpg" />
                                <div className="img-mask"></div>
                            </div>
                            <div className="card-content">
                                <h2>Mechanical</h2>
                                <Arrow />
                            </div>
                        </div>

                    </div>

                </div>
            </section>



            <section className="sponsors">
                <div className="sponsors-inner">

                    <h1>SPONSORS</h1>
                    <div className="divider"></div>

                    <SponsorHighlightPanel />

                </div>
            </section>



            <section className="sponsor-cta">
                <div className="sponsor-cta-inner-wrapper" onClick={() => navigate("/sponsors")}>
                    <div className="sponsor-cta-inner">

                        <div className="cta-content">
                            <h1>Invest In<br />Tomorrow</h1>

                            <div className="arrow-animation">
                                <div className="arrow-animation-wrapper">
                                    <FontAwesomeIcon icon={faCircleRight} />
                                    <FontAwesomeIcon icon={faCircleRight} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </section>
    )

}


export default Home;