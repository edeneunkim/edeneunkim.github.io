import HomeBar from "./components/HomeBar";
import Projects from "./components/Projects";
import React, {useState} from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div className={`${darkMode ? 'dark' : 'light'}`}>
            <HomeBar toggle={toggleDarkMode} mode={darkMode}/>
            <Home />
            <Projects />
            <Experience />
            <Resume />
            <Contacts />
        </div>
    );
}

export default App;