import SponsorCatalog from '../../components/SponsorCatalog/SponsorCatalog.tsx';

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

        </section>
    );
}

export default Sponsors;