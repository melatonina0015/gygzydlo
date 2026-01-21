import './App.css'
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AccessTerminal from './components/AccessTerminal';
import Description from './components/Description';
import AccessPage from './components/AccessPage';
import { DATA_ENTRIES, MASTER_PASSWORD } from './data/database';
import { getUnlockedFromCookie, setUnlockedCookie } from './utils/storage';

type ViewState = 'TERMINAL' | 'DESCRIPTION' | 'ACCESS';

function App() {
    const [currentView, setCurrentView] = useState<ViewState>('TERMINAL');
    const [unlockedIds, setUnlockedIds] = useState<string[]>([]);

    useEffect(() => {
        setUnlockedIds(getUnlockedFromCookie());
    }, []);

    const handleLogin = (code: string) => {
        if (code === MASTER_PASSWORD) {
            setCurrentView('DESCRIPTION');
            return;
        }

        const entry = DATA_ENTRIES.find(e => e.password === code);

        if (entry) {
            if (!unlockedIds.includes(entry.id)) {
                const newIds = [...unlockedIds, entry.id];
                setUnlockedIds(newIds);
                setUnlockedCookie(newIds);
            }
            setCurrentView('ACCESS');
        } else {
            setCurrentView('ACCESS');
        }
    };

    const handleLogout = () => {
        setCurrentView('TERMINAL');
    };

    const handleNavbarNavigation = (view: ViewState) => {
        setCurrentView(view);
    };

  return (
    <div className="h-screen px-[25px] py-[30px] sm:px-[100px]">
        <Navbar onNavigate={handleNavbarNavigation}/>

        {currentView === 'TERMINAL' && (
            <AccessTerminal onAttempt={handleLogin} />
        )}

        {currentView === 'DESCRIPTION' && (
            <Description onBack={handleLogout} />
        )}

        {currentView === 'ACCESS' && (
            <AccessPage
                unlockedIds={unlockedIds}
                onBack={handleLogout}
            />
        )}
    </div>
  )
}

export default App
