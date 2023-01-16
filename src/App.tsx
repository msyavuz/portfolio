import About from "./components/About";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";

function App() {
    return (
        <div className="App flex flex-col bg-gradient-to-b from-black to-slate-700 font-roboto scroll-smooth">
            <Navbar />
            <About />
            <Tech />
        </div>
    );
}

export default App;
