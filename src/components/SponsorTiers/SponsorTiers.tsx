import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './SponsorTiers.css';



type Sponsor = {
    name: string;
    logo: string;
    website: string;
    description: string;
    tier: string;
    theme: string;
}

type SponsorTier = {
    tier: string;
    color: string;
    price: number;
    image: string;
    deliverables: string[];
}

function SponsorTiers() {

    const [sponsorTiers, setSponsorTiers] = useState<SponsorTier[]>([]);
    const [sponsors, setSponsors] = useState<Sponsor[] | []>([]);
    const [currentTier, setCurrentTier] = useState(-1);

    useEffect(() => {
        fetch('/data/sponsor-tiers.json')
            .then((res) => res.json())
            .then(setSponsorTiers)
            .catch(console.error);

        fetch('/data/sponsors.json')
            .then((res) => res.json())
            .then(setSponsors)
            .catch(console.error);
    }, []);



    const sponsorCountByTier: Record<string, number> = sponsors.reduce(
        (acc, sponsor) => {
            if (!acc[sponsor.tier]) acc[sponsor.tier] = 0;
            acc[sponsor.tier]++;
            return acc;
        },
        {} as Record<string, number>
    );


    function setDropdown(id: number) {
        if (id === currentTier) {
            setCurrentTier(-1);
        } else {
            setCurrentTier(id);
        }
    }


    const tierDeck = sponsorTiers.map((item, index) => {
        return <TierDropdown 
            key={index} 
            id={index} 
            sponsorTier={item} 
            sponsorCount={sponsorCountByTier[item.tier] ?? 0}
            setCurrentTier={setDropdown}
            currentTier={currentTier} />
    });



    return (
        <div className="sponsor-tiers">
            {tierDeck}
        </div>
    );
}



interface tierDropdownProps {
    sponsorTier: SponsorTier;
    sponsorCount: number;
    currentTier: number;
    setCurrentTier: (id: number) => void;
    id: number;
}


function TierDropdown({ sponsorTier, sponsorCount, currentTier, setCurrentTier, id }: tierDropdownProps) {

    let dropdownEnabled = currentTier === id;

    const deliverables = sponsorTier.deliverables.map((item) => {
        return <li>{item}</li>
    })


    return (
        <button 
            className={`tier-dropdown ${dropdownEnabled ? "shown" : ""}`}
            onClick={() => setCurrentTier(id)}
            style={{
                "--tier-bg-color": sponsorTier.color
            } as React.CSSProperties }>

            <div className="background-wrapper">
                <div 
                    className="bg-color"
                    style={{
                        "--tier-bg-color": sponsorTier.color
                    } as React.CSSProperties } 
                />

                <img src="/images/pulling_steelhead_out_of_water.jpg" />
            </div>

            <div className="header">
                <h2>{sponsorTier.tier}</h2>

                <div>
                    <h2>${sponsorTier.price}+</h2>
                    <FontAwesomeIcon icon={faAngleRight} className={dropdownEnabled ? "rotate" : ""}/>
                </div>
            </div>

            <div className={`dropdown-content ${dropdownEnabled ? "shown" : ""}`}>
                <div>
                    {/* <img src="/images/steelhead_swimming.jpg" /> */}

                    <ul>
                        {deliverables}
                    </ul>

                    <h4>{sponsorCount} current sponsor{sponsorCount === 1 ? "" : "s"}</h4>
                </div>
            </div>
        </button>
    );
}




export default SponsorTiers;