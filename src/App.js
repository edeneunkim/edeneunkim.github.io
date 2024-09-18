import HomeBar from "./components/HomeBar";
import Projects from "./components/Projects";
import React, {useState} from "react";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div className={`${darkMode ? 'dark' : 'light'}`}>
            <HomeBar toggle={toggleDarkMode} mode={darkMode}/>
            <Home />
            <About mode={darkMode}/>
            <Projects mode={darkMode}/>
            <Contacts />
        </div>
    );
}

export default App;