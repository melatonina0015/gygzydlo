import './App.css'
import Navbar from "./components/Navbar.tsx";
import AccessTerminal from "./components/AccessTerminal.tsx";
import {useState} from "react";
import Description from "./components/Description.tsx";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="h-screen px-[25px] py-[30px] sm:px-[100px]">
        <Navbar />
        {
            !isLoaded ? (<AccessTerminal onFinished={() => setIsLoaded(true)}/>
        ) : (
            <Description />
            )}
    </div>
  )
}

export default App
