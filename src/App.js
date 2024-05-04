import HomeBar from "./components/HomeBar";
import Projects from "./components/Projects";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div className={`${darkMode ? 'dark' : 'light'}`}>
            <HomeBar toggle={toggleDarkMode} mode={darkMode}/>
            {/*<Projects />*/}
        </div>
    );
}

export default App;