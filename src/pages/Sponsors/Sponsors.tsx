import SponsorCatalog from '../../components/SponsorCatalog/SponsorCatalog.tsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import SubbotsLogo from '../../assets/icons/subbots.svg?react';

import './Sponsors.css';


function Sponsors() {

    return (
        <section className="Sponsors">

            <div className="title-card">

                <div className="content">
                    <img src="/images/suspended_pcb.JPG" alt="Close-up of a suspended PCB assembly" />
                    <div className="img-mask" />
                    <h2>Our <strong>Sponsors</strong></h2>
                    <p className="content-text-large">
                        Our achievements wouldn't be possible without the support of our sponsors.
                    </p>
                </div>

            </div>


            <SponsorCatalog />


            {/* RE-ADD WHEN TIERS FINALIZED */
            /* <section className="tiers">

                <div className="title">
                    <h2>Tiers</h2>
                </div>

                <SponsorTiers />

            </section> */}

            <section className="sponsor-cta">
                <div className="sponsor-cta-inner">

                    <SubbotsLogo className="background" />

                    <h2>Sponsor Us</h2>

                    <div className="divider" />

                    <div className="content">
                        <a href="https://donate.give.ubc.ca/page/80953/donate/1?transaction.dirgift=UBC%20Subbots%20Design%20team%20G2561" target="_blank" rel="noopener noreferror" className="button-primary">
                            Donate
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>

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