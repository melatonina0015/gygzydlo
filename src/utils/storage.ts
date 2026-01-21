export const setUnlockedCookie = (ids: string[]) => {
    const value = ids.join(',');
    document.cookie = `unlocked_entries=${value}; path=/; max-age=31536000`;
};

export const getUnlockedFromCookie = (): string[] => {
    const cookies = document.cookie.split('; ');
    const unlockedCookie = cookies.find(row => row.startsWith('unlocked_entries='));

    if (!unlockedCookie) return [];

    const value = unlockedCookie.split('=')[1];
    if (!value) return [];

    return value.split(',');
};