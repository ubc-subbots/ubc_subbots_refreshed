import SubbotsLogo from '../../assets/icons/subbots.svg?react';
import LinkedInLogo from '../../assets/icons/linkedin-solid.svg?react';
import InstagramLogo from '../../assets/icons/instagram-solid.svg?react';
import GitHubLogo from '../../assets/icons/github-solid.svg?react';
import { useNavigate } from "react-router-dom";

import './Footer.css';


function Footer() {

    const navigate = useNavigate();

    function navigateAndClose(path: string) {
        navigate(path);
    }

    return (
        <section className="footer">

            <div className="navigator">

                <div className="navigator-left">
                    <SubbotsLogo onClick={() => navigateAndClose("/")} />
                </div>
                <div className="navigator-right">
                    <a onClick={() => navigateAndClose("/")}>Home</a>
                    <a onClick={() => navigateAndClose("/projects")}>Projects</a>
                    <a onClick={() => navigateAndClose("/members")}>Members</a>
                    {/* <a onClick={() => navigateAndClose("/robots")}>Robots</a> */}
                    <a onClick={() => navigateAndClose("/sponsors")}>Sponsor</a>
                </div>

            </div>


            <div className="content">

                <div className="content-left">
                    <h1>ADVANCED</h1>
                    <h1><strong>SUBSEA</strong></h1>
                    <h1>ENGINEERING</h1>
                </div>
                <div className="content-right">
                    <iframe 
                        className="embedded-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.3695800281448!2d-123.24867639151663!3d49.262313191417896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672c98486aabb%3A0xdb34b1b740a5c5c2!2sWayne%20and%20William%20White%20Engineering%20Design%20Centre!5e0!3m2!1sen!2sca!4v1767372310015!5m2!1sen!2sca"
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>


            <div className="credits">

                <div className="credits-left">
                    <p>Copyright © UBC Subbots 2025</p>
                </div>
                <div className="credits-right">
                    <a href="https://www.linkedin.com/company/ubc-subbots/" ><LinkedInLogo /></a>
                    <a href="https://github.com/ubc-subbots" ><GitHubLogo /></a>
                    <a href="https://www.instagram.com/ubcsubbots/" ><InstagramLogo /></a>
                </div>
                
            </div>

        </section>
    );
}

export default Footer;