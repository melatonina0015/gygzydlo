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
        <div className="flex justify-between">
            <div>
                <p>[Timestamp: {time} | Host: {ip}]</p>
            </div>
            <div>
                <ul className="flex gap-[66px]">
                    <li>Access</li>
                    <li>Commands</li>
                    <li>System Info</li>
                    <li>Security</li>
                    <li>Archive_Backup</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
