import * as React from 'react';
import {Button} from "@nextui-org/react";
import {scrollToSection} from "./HomeBar";

function Home() {
    return (
        <div id='home' className="home">
            <div>
                <p className="homeTitle text-primary">Eden Kim</p>
                <p className="homeSubtitle text-primary">Welcome to my page. Scroll to learn more about me.</p>
            </div>
        </div>
    );
}

export default Home;