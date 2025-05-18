export interface Movie {
    id: number;
    title: string;
    time: string;
    description: string;
    genre: string;
    poster: string;
}

export const MOVIES: Movie[] = [
    {
        id: 1,
        title: 'Інтерстеллар',
        description: 'Фантастичний фільм про космос та час',
        genre: 'Наукова фантастика',
        time: '2025-05-20 19:00',
        poster: 'https://image.tmdb.org/t/p/w500/example1.jpg'
    },
    {
        id: 2,
        title: 'Темний лицар',
        description: 'Бетмен проти Джокера',
        genre: 'Екшн',
        time: '2025-05-21 21:00',
        poster: 'https://image.tmdb.org/t/p/w500/example2.jpg'
    },
];