import About from "./components/sections/About";
import Navbar from "./components/sections/Navbar";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";

function App() {
    return (
        <div className="App flex flex-col bg-gradient-to-b from-black to-slate-700 font-roboto scroll-smooth">
            <Navbar />
            <About />
            <Tech />
            <Projects />
        </div>
    );
}

export default App;
