import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App h-screen w-screen bg-gradient-to-b from-black to-slate-700 font-roboto">
            <Navbar />
            <About />
        </div>
    );
}

export default App;
