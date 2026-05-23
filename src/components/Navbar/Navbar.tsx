import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

import SubbotsLogo from '../../assets/icons/subbots.svg?react'

import './Navbar.css'



function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);


    useEffect(() => {
        setMobileMenu(false);
    }, [location.pathname]);


    return (
        <section className={`navbar ${mobileMenu ? "navbar-expanded" : ""}`}>
            <div className="navbar-inner">

                <div className="navbar-container">

                    <div className="navbar-left">
                        <SubbotsLogo onClick={() => navigate("/")} />

                        <div className="navigator">
                            <div onClick={() => navigate("/")}>Home</div>
                            <div onClick={() => navigate("/projects")}>Projects</div>
                            <div onClick={() => navigate("/members")}>Members</div>
                            {/* <div onClick={() => navigate("/robots")}>Robots</div> */}
                            <div onClick={() => navigate("/sponsors")}>Sponsors</div>
                        </div>
                    </div>

                    <div className="navbar-right">

                        <div className="searchbar">
                            <h4>Search</h4>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <FontAwesomeIcon icon={faBars} className="menu" onClick={() => setMobileMenu(!mobileMenu)}/>

                    </div>

                </div>

                <div className={`mobile-menu ${mobileMenu ? "menu-enabled" : ""}`}>
                    <div onClick={() => navigate("/")}>Home</div>
                    <div onClick={() => navigate("/projects")}>Projects</div>
                    <div onClick={() => navigate("/members")}>Members</div>
                    <div onClick={() => navigate("/robots")}>Robots</div>
                    <div onClick={() => navigate("/sponsors")}>Sponsors</div>
                </div>

            </div>
        </section>
    )

}

export default Navbar;