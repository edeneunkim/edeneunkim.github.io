import * as React from 'react';
import {Button} from "@nextui-org/react";

function Home() {
    return (
        <div id='home' className="home">
            <div>
                <p className="title text-primary animate-header">Eden Kim</p>
                <p className="subtitle text-primary animate-sub">Welcome to my page. Click to learn more about me.</p>
                <div className="homeButton animate-header">
                    <Button>
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;