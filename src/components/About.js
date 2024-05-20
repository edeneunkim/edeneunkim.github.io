import * as React from 'react';
import {Card, CardBody, CardHeader} from "@nextui-org/react";

function About() {
    return (
        <div id='about' className="about">
            <p className="aSubTitle text-primary">Eden Kim is a:</p>
            <div className="aboutContainer">
                <div className="aboutBox">
                    <h2 className="text-primary">Creator</h2>
                    <p className="text-primary">I enjoy creating</p>
                </div>
                <div className="aboutBox">
                    <h2 className="text-primary">Opportunist</h2>
                    <p className="text-primary">I enjoy opportunities</p>
                </div>
                <div className="aboutBox">
                    <h2 className="text-primary">Learner</h2>
                    <p className="text-primary">I enjoy learning</p>
                </div>
            </div>
        </div>
    );
}

export default About;