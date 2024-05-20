import * as React from 'react';
import {BrainIcon} from "./Icons/BrainIcon";
import {HandshakeIcon} from "./Icons/HandShakeIcon";
import {PaletteIcon} from "./Icons/PaletteIcon";

function About({mode}) {
    return (
        <div id='about' className="about">
            <p className="sectionTitle text-primary">I am a:</p>
            <div className="aboutContainer">
                <div className="aboutBox">
                    <div className="aboutIcon">
                        <PaletteIcon mode={mode}/>
                    </div>
                    <h2 className="text-primary">Creator</h2>
                    <p className="text-secondary">I enjoy bringing my ideas to life through various projects.</p>
                </div>
                <div className="aboutBox">
                    <div className="aboutIcon">
                        <HandshakeIcon mode={mode}/>
                    </div>
                    <h2 className="text-primary">Opportunist</h2>
                    <p className="text-secondary">I actively seek and create opportunities, and ensure that I make the
                    most out of them.</p>
                </div>
                <div className="aboutBox">
                    <div className="aboutIcon2">
                        <BrainIcon mode={mode}/>
                    </div>
                    <h2 className="text-primary">Learner</h2>
                    <p className="text-secondary">I am passionate about learning, always seeking out knowledge and skills to improve.</p>
                </div>
            </div>
        </div>
    );
}

export default About;