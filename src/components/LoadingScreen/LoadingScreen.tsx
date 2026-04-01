import { useState } from 'react';
import './LoadingScreen.css';

import SubbotsLogo from '../../assets/icons/subbots.svg?react';


interface LoadingScreenProps {
    exiting: boolean;
}

function LoadingScreen({ exiting }: LoadingScreenProps) {

    return (
        <div className={`loading-screen ${exiting ? "slide-up" : ""}`}>
            <div className="loading-screen-inner">
                <SubbotsLogo className="fill" />
                <SubbotsLogo className="track" />
            </div>
        </div>
    );
}

export default LoadingScreen;