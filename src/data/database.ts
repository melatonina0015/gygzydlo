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
    },
    {
        id: "003",
        date: '12-12-2013',
        password: 'katastrofa',
        image: "entry003.png"
    },
    {
        id: "004",
        date: '02-03-2014',
        password: 'milicja',
        image: "entry004.png"
    },
    {
        id: "005",
        date: '27-04-2014',
        password: 'makapaka',
        image: "entry005.png"
    },
    {
        id: "006",
        date: '07-09-2014',
        password: 'kurcze',
        image: "entry006.png"
    },
    {
        id: "007",
        date: '11-04-2017',
        password: 'mamałyga',
        image: "entry007.png"
    },
    {
        id: "008",
        date: '31-08-2019',
        password: 'korfanty',
        image: "entry008.png"
    }

];