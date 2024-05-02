import HomeBar from "./components/HomeBar";
import Projects from "./components/Projects";
import {useState} from "react";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`${darkMode && "dark"}`}>
            <HomeBar toggle={toggleDarkMode}/>
            <Projects />
        </div>
    );
}

export default App;