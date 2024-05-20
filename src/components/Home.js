import * as React from 'react';
import {Button} from "@nextui-org/react";
import {scrollToSection} from "./HomeBar";

function Home() {
    return (
        <div id='home' className="home">
            <div>
                <p className="homeTitle text-primary animate-header">Eden Kim</p>
                <p className="homeSubtitle text-primary animate-sub">Welcome to my page. Click to learn more about me.</p>
                <div className="homeButton">
                    <Button onClick={() => scrollToSection('about')}>
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;