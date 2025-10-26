import './App.css'
import Navbar from "./components/Navbar.tsx";
import AccessTerminal from "./components/AccessTerminal.tsx";
import {useState} from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="h-screen p-[100px]">
        <Navbar />
        {
            !isLoaded ? (<AccessTerminal onFinished={() => setIsLoaded(true)}/>
        ) : (
            <div className="flex justify-center items-center h-screen">
                <p>Kobyła ma mały bok</p>
            </div>
            )}
    </div>
  )
}

export default App
