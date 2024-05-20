import HomeBar from "./components/HomeBar";
import Projects from "./components/Projects";
import React, {useState} from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Education from "./components/Education";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div className={`${darkMode ? 'dark' : 'light'}`}>
            <HomeBar toggle={toggleDarkMode} mode={darkMode}/>
            <Home />
            <About />
            <Projects />
            <Experience />
            {/*<Resume />*/}
            <Education />
            <Contacts />
        </div>
    );
}

export default App;