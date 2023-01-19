import About from "./components/sections/About";
import Navbar from "./components/sections/Navbar";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
    return (
        <div className="App flex flex-col bg-gradient-to-b from-black to-slate-700 font-roboto scroll-smooth">
            <Navbar />
            <About />
            <Tech />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
