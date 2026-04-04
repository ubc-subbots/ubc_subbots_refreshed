import { useState, useEffect } from 'react';
import SponsorCatalog from '../../components/SponsorCatalog/SponsorCatalog.tsx';
import SponsorTiers from '../../components/SponsorTiers/SponsorTiers.tsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SubbotsLogo from '../../assets/icons/subbots.svg?react';

import './Sponsors.css';


function Sponsors() {

    return (
        <section className="Sponsors">

            <div className="playable-thumbnail">

            </div>


            <SponsorCatalog />


            <section className="tiers">

                <div className="title">
                    <h2>Tiers</h2>
                </div>

                <SponsorTiers />

            </section>

            <section className="sponsor-cta">
                <div className="sponsor-cta-inner">

                    <SubbotsLogo className="background" />

                    <h2>Sponsor Us</h2>

                    <div className="divider" />

                    <div className="content">
                        <button className="button-primary">
                            Email Us
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>

                        <p className="content-text-large">
                            Your contributions directly support design teams in BC. 
                            Support next generation engineers and computer scientists specializing in 
                            mechanical, electrical, software, and robotics. Invest in the future of 
                            Vancouver, making tomorrow more advanced than today.
                        </p>
                    </div>

                </div>

            </section>

        </section>
    );
}

export default Sponsors;