import {useEffect, useState} from "react";
import { DATA_ENTRIES, MASTER_PASSWORD } from '../data/database'; // 1. Importujemy hasła

type AccessTerminalProps = {
    onAttempt: (code: string) => void;
};

const AccessTerminal = ({ onAttempt } : AccessTerminalProps ) => {
    const [accessCode, setAccessCode] = useState('');
    const [dots, setDots] = useState("");
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState<'IDLE' | 'VERIFYING' | 'SUCCESS' | 'FAIL'>('IDLE');

    useEffect(() => {
        if (status === 'IDLE') {
            setDots("");
            return;
        }
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 300);

        let delay = 0;
        if (status === 'VERIFYING') delay = 1500; // Czas "hakowania"
        else if (status === 'SUCCESS' || status === 'FAIL') delay = 2000;

        const timeout = setTimeout(() => {
            if (status === 'VERIFYING') {
                const isValid =
                    accessCode === MASTER_PASSWORD ||
                    DATA_ENTRIES.some(entry => entry.password === accessCode);

                setStatus(isValid ? 'SUCCESS' : 'FAIL');
            }

            // ETAP 2a: Sukces - przekierowanie
            else if (status === 'SUCCESS') {
                onAttempt(accessCode); // TO PRZEKIEROWUJE
                setStatus('IDLE');
                setAccessCode('');
            }
            // ETAP 2b: Porażka - reset (ZOSTAJEMY W TERMINALU)
            else if (status === 'FAIL') {
                // Nie wywołujemy onAttempt!
                setStatus('IDLE');
                setAccessCode(''); // Czyścimy input, żeby można było wpisać nowe hasło
            }
        }, delay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [status, accessCode, onAttempt]);

    const handleSubmit = () => {
        if (accessCode.trim() !== '') {
            setStatus('VERIFYING');
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSubmit();
    }

    const renderStatusMessage = () => {
        switch (status) {
            case 'VERIFYING':
                return <p>Verifying credentials{dots}</p>;
            case 'SUCCESS':
                return <p className="text-green-500">ACCESS GRANTED. Redirecting{dots}</p>;
            case 'FAIL':
                return <p className="text-[#FF3A3D]">ACCESS DENIED. Logging incident{dots}</p>;
            default:
                return null;
        }
    };

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col gap-[20px]'>
                <p>
                    ACCESS TERMINAL v1.04 <br/>
                    Unauthorized users will be logged. Secure access required.
                </p>
                <div className='flex'>
                    <p className='pr-2'>ENTER ACCESS CODE:</p>
                    <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} autoFocus onKeyDown={handleKeyDown}/>
                </div>
                { status === 'IDLE' ?
                (<div className='pt-20 btn-same-width gap-[55px] sm:gap-[85px]'>
                    <button onClick={handleSubmit}>Enter</button>
                </div>) :(
                        <div className="text-center py-2 uppercase font-bold text-sm tracking-widest">
                            {renderStatusMessage()}
                        </div>
                    )
                }

                { processing &&
                    <>
                        <p>
                            Attempt logged: ID: a5f2c9 <br/>
                            [SECURITY] Attempt flagged for review. You are being observed.
                        </p>
                        <p className='uppercase'>
                            Access granted <span>{dots}</span>
                        </p>
                    </>
                }
            </div>
        </div>
    )
}
export default AccessTerminal
