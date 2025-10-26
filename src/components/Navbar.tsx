import {useEffect, useState} from "react";

const Navbar = () => {
    const [time, setTime] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimestamp());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getTimestamp = () => {
        const now = new Date();

        //return now.toISOString().replace("T", " ").slice(0, 19);
        return now.toLocaleString('pl-PL');
    }
    
    return (
        <div className="flex justify-between">
            <div>
                <p>[Timestamp: {time} | Host: node-03]</p>
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
