import { useNavigate } from 'react-router-dom';
import { useRef, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCircleRight } from '@fortawesome/free-solid-svg-icons';

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Home.css';
import SubbotsLogo from '../../assets/icons/subbots.svg?react';
import Arrow from '../../assets/icons/arrow.svg?react';

import Model from '../../components/Model/Model.tsx';
import SponsorHighlightPanel from '../../components/Sponsors/HighlightPanel.tsx';

gsap.registerPlugin(SplitText, ScrollTrigger);



function Home() {

    const textAnimRefs = useRef<HTMLParagraphElement[]>([]);
    const navigate = useNavigate();

    const addTextRef = (el: HTMLParagraphElement | null): void => {
        if (el && !textAnimRefs.current.includes(el)) {
            textAnimRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        if (!textAnimRefs.current) return;

        const splits: SplitText[] = [];

        textAnimRefs.current.forEach((text) => {

            const split = new SplitText(text, {
                type: "words",
                wordsClass: "word",
            });

            split.words.forEach((word) => {
                if (!word.parentNode) return;

                const wrapper = document.createElement("span");
                wrapper.classList.add("word-mask");

                word.parentNode.insertBefore(wrapper, word);
                wrapper.appendChild(word);
            });

            gsap.from(split.words, {
                yPercent: 120,
                stagger: 0.01,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: text,
                    start: "top 100%",
                    end: "top 100%",
                    toggleActions: "restart none restart reset",
                },
            });

            splits.push(split);

        })

        return () => {
            splits.forEach((split) => split.revert());
        };
    }, []);


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
                        <h2>Meet <strong>Steelhead</strong></h2>
                        <p className="content-text-large gsap-text-reveal" ref={addTextRef}>
                            UBC Subbots is a student-led team that designs and builds autonomous underwater 
                            vehicles (AUVs) for the annual RoboSub competition in San Diego. We develop 
                            systems for navigation, waterproofing, hydrodynamics, and mechanical actuation, 
                            integrating expertise from engineering and computer science.
                        </p>
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
                        <h2>Build <strong><br />Underwater Robots</strong></h2>
                        <p className="content-text-large gsap-text-reveal" ref={addTextRef}>
                            At UBC Subbots, we embrace students from all backgrounds and provide hands-on 
                            learning in a supportive, beginner-friendly environment.
                        </p>
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
                                <img src="/images/rviz.png" />
                                <div className="img-mask"></div>
                            </div>
                            <div className="card-content">
                                <h2>Software</h2>
                                <Arrow />
                            </div>
                        </div>

                        <div className="subteam-card" onClick={() => navigate("/projects")}>
                            <div className="card-display">
                                <img src="/images/soldering_pcb.jpg" />
                                <div className="img-mask"></div>
                            </div>
                            <div className="card-content">
                                <h2>Electrical</h2>
                                <Arrow />
                            </div>
                        </div>

                        <div className="subteam-card" onClick={() => navigate("/projects")}>
                            <div className="card-display">
                                <img src="/images/steelhead_upshot.jpg" />
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
                <div className="sponsor-cta-inner-wrapper">
                    <div className="sponsor-cta-inner">

                        <div className="cta-content">
                            <h1>Invest In<br />Tomorrow</h1>

                            <div className="arrow-animation" onClick={() => navigate("/sponsors")}>
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