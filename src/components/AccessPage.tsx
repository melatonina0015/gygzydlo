import { useState } from 'react';
import { DATA_ENTRIES } from '../data/database';

type AccessPageProps = {
    unlockedIds: number[];
    message: string | null;
    onBack: () => void;
}

const AccessPage = ({ unlockedIds, message, onBack }: AccessPageProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % DATA_ENTRIES.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + DATA_ENTRIES.length) % DATA_ENTRIES.length);

    const currentEntry = DATA_ENTRIES[currentIndex];
    const isUnlocked = unlockedIds.includes(currentEntry.id);
    const isError = message?.includes('DENIED');

    const buildPTag = () => {

        return `Entry ${isUnlocked ? `${currentEntry.id} dated ${currentEntry.date}` : `${currentEntry.id}`}: ${isUnlocked ? 'DOSTĘP PRZYZNANY' : 'BRAK DOSTĘPU'}`
    }

    return (
        <div className="h-full flex flex-col pt-32">
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
                    <img src={`/assets/img/${currentEntry.image}`} className="w-full max-w-2xl" />
                </div>
            )}
            {/*{message && (*/}
            {/*    <div className={`mb-8 p-2 border ${isError ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500 animate-pulse'}`}>*/}
            {/*        <p className="uppercase text-sm font-bold tracking-widest">{message}</p>*/}
            {/*    </div>*/}
            {/*)}*/}

            {/*<div className="w-full max-w-2xl border border-green-900 bg-black/50 p-6 relative min-h-[400px] flex flex-col">*/}
            {/*    <div className="flex justify-between items-center mb-6 border-b border-green-900 pb-2">*/}
            {/*        <span className="text-xl font-bold">ENTRY_00{currentEntry.id}</span>*/}
            {/*        <span className={`text-xs px-2 py-1 ${isUnlocked ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>*/}
            {/*            {isUnlocked ? 'DECRYPTED' : 'ENCRYPTED'}*/}
            {/*        </span>*/}
            {/*    </div>*/}

            {/*    <div className="flex-grow flex flex-col items-center justify-center text-center">*/}
            {/*        {isUnlocked ? (*/}
            {/*            <div className="space-y-4 animate-in fade-in duration-700">*/}
            {/*                <h2 className="text-2xl font-bold uppercase text-white mb-4">{currentEntry.title}</h2>*/}
            {/*                <div className="w-full h-32 border border-green-800 flex items-center justify-center bg-green-900/20 mb-4">*/}
            {/*                    <span className="text-xs italic opacity-50">[{currentEntry.imagePlaceholder}]</span>*/}
            {/*                </div>*/}
            {/*                <p className="text-sm sm:text-base leading-relaxed text-justify opacity-90">*/}
            {/*                    {currentEntry.content}*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        ) : (*/}
            {/*            <div className="flex flex-col items-center opacity-50">*/}
            {/*                <div className="text-6xl mb-4">🔒</div>*/}
            {/*                <p className="uppercase tracking-widest">Data encrypted.</p>*/}
            {/*                <p className="text-xs mt-2">Input required access code.</p>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}

            {/*    <div className="flex justify-between items-center mt-8 pt-4 border-t border-green-900">*/}
            {/*        <button onClick={handlePrev} className="hover:text-white hover:underline uppercase text-sm">&lt; Prev</button>*/}
            {/*        <span className="text-xs opacity-50">{currentIndex + 1} / {DATA_ENTRIES.length}</span>*/}
            {/*        <button onClick={handleNext} className="hover:text-white hover:underline uppercase text-sm">Next &gt;</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<button onClick={onBack} className="mt-8 border border-green-700 px-6 py-2 hover:bg-green-900 hover:text-white uppercase text-xs tracking-widest transition-colors">*/}
            {/*    Terminuj sesję (Log out)*/}
            {/*</button>*/}
        </div>
    );
};

export default AccessPage;