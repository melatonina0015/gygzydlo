import {useEffect, useState} from "react";

type AccessTerminalProps = {
    onFinished: () => void;
};

const ACCESS_CODE = 'haslo_page';

const AccessTerminal = ({ onFinished } : AccessTerminalProps ) => {
    const [accessGranted, setAccessGranted] = useState(false);
    const [accessCode, setAccessCode] = useState('');
    const [dots, setDots] = useState("");

    useEffect(() => {
        if (!accessGranted) return;

        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 1000);

        const timeout = setTimeout(() => {
            onFinished();
        }, 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [accessGranted, onFinished]);

    const grantAccess = () => {
        if (accessCode === ACCESS_CODE) {
            setAccessGranted(true)
        }
    }

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col gap-[20px]'>
                <p>
                    ACCESS TERMINAL v1.04 <br/>
                    Unauthorized users will be logged. Secure access required.
                </p>
                <div className='flex'>
                    <p className='pr-2'>ENTER ACCESS CODE:</p>
                    <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} />
                </div>
                { !accessGranted &&
                <div className='flex gap-[33px] pt-20 justify-center'>
                    <button className='uppercase border p-[5px] hover:border-white hover:text-white'>Terminate</button>
                    <button className='uppercase border p-[5px] hover:border-white hover:text-white' onClick={grantAccess}>Enter</button>
                </div>
                }

                { accessGranted &&
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
