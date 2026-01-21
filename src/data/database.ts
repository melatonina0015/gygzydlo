export const MASTER_PASSWORD = 'haslo_page';

export interface Entry {
    id: string;
    date: string;
    password: string;
    image: string;
}

export const DATA_ENTRIES: Entry[] = [
    {
        id: "001",
        date: '13-05-2013',
        password: 'rozstrojenie',
        image: "entry001.png"
    },
    {
        id: "002",
        date: '02-11-2013',
        password: 'zaburzenie',
        image: "entry002.png"
    }
];