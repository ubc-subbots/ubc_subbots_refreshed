import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './SponsorCatalog.css';



type Sponsor = {
    name: string;
    logo: string;
    website: string;
    description: string;
    tier: string;
    theme: string;
}

function SponsorCatalog() {

    const [sponsors, setSponsors] = useState<Sponsor[] | []>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch('/data/sponsors.json')
        .then((res) => res.json())
        .then(setSponsors)
        .catch(console.error);
    }, []);


    const sponsorDeck = sponsors.map((item, index) => {
        return <SponsorCard key={index} id={index} sponsor={item} />
    });


    const scrollNext = () => {
        const container = scrollRef.current;
        if (!container) return;

        const inner = container.children[0];

        // Get width of one section
        const sectionWidth = inner.firstElementChild?.clientWidth ?? 0;

        // Scroll by one section width
        container.scrollBy({ left: sectionWidth, behavior: "smooth" });
    };

    const scrollPrev = () => {
        const container = scrollRef.current;
        if (!container) return;

        const inner = container.children[0];

        const sectionWidth = inner.firstElementChild?.clientWidth ?? 0;
        container.scrollBy({ left: -sectionWidth, behavior: "smooth" });
    };


    return (
        <section className="sponsor-catalog">

            <div className="scroll-x-container" ref={scrollRef}>
                <div className="sponsor-deck">
                    {sponsorDeck}
                </div>
            </div>

            <div className="divider">
                <button className="switch" onClick={scrollPrev}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </button>

                <button className="switch" onClick={scrollNext}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </button>
            </div>

        </section>
    );
}



interface sponsorCardProps {
    id: number;
    sponsor: Sponsor;
}

function SponsorCard({ sponsor }: sponsorCardProps) {


    return (
        <div className="sponsor-card">
            <div className="display">
                <img src={`./images/logos/${sponsor.logo}`} />
                <div className="underline" />
            </div>

            <div className="content">
                <h3>{sponsor.name}</h3>
                <p>{sponsor.description}</p>
            </div>
        </div>
    );

}


export default SponsorCatalog;