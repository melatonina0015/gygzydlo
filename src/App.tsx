import './App.css'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AccessTerminal from './components/AccessTerminal';
import Description from './components/Description';
import AccessPage from './components/AccessPage';
import { DATA_ENTRIES, MASTER_PASSWORD } from './data/database';
import { getUnlockedFromCookie, setUnlockedCookie } from './utils/storage';

type ViewState = 'TERMINAL' | 'DESCRIPTION' | 'ACCESS';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentView, setCurrentView] = useState<ViewState>('TERMINAL');
    const [unlockedIds, setUnlockedIds] = useState<number[]>([]);
    const [loginMessage, setLoginMessage] = useState<string | null>(null);

    // Ładowanie ciasteczek przy starcie aplikacji
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
            setLoginMessage('ACCESS GRANTED: New data decryption successful.');
            setCurrentView('ACCESS');
        } else {
            // 3. Hasło błędne
            setLoginMessage('ACCESS DENIED: Invalid credentials.');
            setCurrentView('ACCESS');
        }
    };

    const handleLogout = () => {
        setCurrentView('TERMINAL');
        setLoginMessage(null);
    };

    // Funkcja pomocnicza do nawigacji z Navbara
    // Czyści ona komunikaty o błędach logowania, żeby wejście przez menu było "czyste"
    const handleNavbarNavigation = (view: ViewState) => {
        setLoginMessage(null); // Resetujemy komunikaty, bo użytkownik wchodzi "z palca"
        setCurrentView(view);
    };

  return (
    <div className="h-screen px-[25px] py-[30px] sm:px-[100px]">
        <Navbar onNavigate={handleNavbarNavigation}/>
        {/*{*/}
        {/*    !isLoaded ? (<AccessTerminal onFinished={() => setIsLoaded(true)}/>*/}
        {/*) : (*/}
        {/*    <Description />*/}
        {/*    )}*/}

        {currentView === 'TERMINAL' && (
            <AccessTerminal onAttempt={handleLogin} />
        )}

        {currentView === 'DESCRIPTION' && (
            <Description onBack={handleLogout} />
        )}

        {currentView === 'ACCESS' && (
            <AccessPage
                unlockedIds={unlockedIds}
                message={loginMessage}
                onBack={handleLogout}
            />
        )}
    </div>
  )
}

export default App
