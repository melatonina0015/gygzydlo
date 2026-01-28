import { useState } from 'react';
import { DATA_ENTRIES } from '../data/database';

type AccessPageProps = {
    unlockedIds: string[];
    onBack: () => void;
}

const AccessPage = ({ unlockedIds, onBack }: AccessPageProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % DATA_ENTRIES.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + DATA_ENTRIES.length) % DATA_ENTRIES.length);

    const currentEntry = DATA_ENTRIES[currentIndex];
    const isUnlocked = unlockedIds.includes(currentEntry.id);

    const buildPTag = () => {

        return `Entry ${isUnlocked ? `${currentEntry.id} dated ${currentEntry.date}` : `${currentEntry.id}`}: ${isUnlocked ? 'DOSTĘP PRZYZNANY' : 'BRAK DOSTĘPU'}`
    }

    return (
        <div className="h-full flex flex-col pt-32 ">
            <div className="flex items-center gap-8">
                <p>{buildPTag()}</p>
                {!isUnlocked && <p className="text-[#FF3A3D]">ACCESS DENIED - CODE: A-400 - INPUT REQUIRED</p>}
            </div>

            <div className="flex mt-8 items-center">
                <button onClick={onBack} className="border-none pl-0">Back</button>
                <div className="flex items-center ml-8">
                    <button onClick={handlePrev} className="hover:text-white hover:underline uppercase text-sm border-none">&lt; </button>
                    <span className="text-xs opacity-50">{currentIndex + 1} / {DATA_ENTRIES.length}</span>
                    <button onClick={handleNext} className="hover:text-white hover:underline uppercase text-sm border-none">&gt;</button>
                    </div>
            </div>
            {isUnlocked && (
                <div>
                    <img src={`/assets/img/${currentEntry.image}`} className="w-full max-w-2xl mb-16" alt="entry"/>
                </div>
            )}
        </div>
    );
};

export default AccessPage;