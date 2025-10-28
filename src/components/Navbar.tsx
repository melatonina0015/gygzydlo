import {useEffect, useState} from "react";

const Navbar = () => {
    const [time, setTime] = useState("")
    const [ip, setIp] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimestamp());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        getIP();
    }, []);

    async function getIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setIp(data.ip);
        } catch (error) {
            console.error('Error fetching IP address:', error);
        }
    }

    const getTimestamp = () => {
        const now = new Date();
        return now.toLocaleString('pl-PL');
    }
    
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className='pb-5 sm:pb-0 self-start sm:self-auto'>
                <p className='text-xs'>[Timestamp: {time} | Host: {ip}]</p>
            </div>
            <div className="w-full sm:w-fit">
                <ul className="flex text-base sm:text-[20px] gap-[10px] justify-between sm:gap-[40px] text-nowrap">
                    <li>Access</li>
                    <li>System_Info</li>
                    <li>Security</li>
                    <li>Archive_Backup</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
