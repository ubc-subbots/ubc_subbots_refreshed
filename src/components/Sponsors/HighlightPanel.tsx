import { useState, useEffect } from 'react';
import Arrow from '../../assets/icons/arrow.svg?react';

import './HighlightPanel.css';



type Sponsor = {
    name: string;
    logo: string;
    website: string;
    description: string;
    tier: string;
    theme: string;
}

function HighlightPanel() {

    const [sponsors, setSponsors] = useState<Sponsor[] | []>([]);
    const [currentHover, setCurrentHover] = useState<number | null>(null);

    useEffect(() => {
        fetch('/data/sponsors.json')
        .then((res) => res.json())
        .then(setSponsors)
        .catch(console.error);
    }, []);

    const sponsorDeck = sponsors.map((item, index) => {
        return <HighlightCard key={index} id={index} data={item} onHover={setCurrentHover} />
    });


    return (
        <div className="highlight-panel">

            <div className="panel-list">
                { sponsorDeck }
            </div>

            <div className="panel-display">
                <img src="/images/pulling_steelhead_out_of_water.jpg" />
                <div className="content-mask" />

                <div className="content">
                    <img 
                        src={
                            currentHover !== null &&
                            currentHover >= 0 &&
                            currentHover < sponsors.length
                                ? "images/logos/" + sponsors[currentHover].logo
                                : ""
                        } 
                    />

                    <p>
                        {currentHover !== null &&
                            currentHover >= 0 &&
                            currentHover < sponsors.length
                                ? sponsors[currentHover].description
                                : null
                        }
                    </p>
                </div>
            </div>

        </div>
    );

}



interface cardProps {
    id: number;
    data: Sponsor;
    onHover: (id: number) => void;
}

function HighlightCard({ id, data, onHover }: cardProps) {

    return (
        <a className="highlight-card" href={data.website} onMouseEnter={() => onHover(id)}>
            <div className="card-underlay" />
            <div className="card-content">
                <h3>{data.name}</h3>
                <Arrow />
            </div>
        </a>
    );
}

export default HighlightPanel;