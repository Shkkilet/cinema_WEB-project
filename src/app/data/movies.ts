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
  {
    id: 3,
    title: 'Втеча з Шоушенка',
    description: 'Неймовірна історія надії та свободи',
    genre: 'Драма',
    time: '2025-05-22 18:30',
    poster: 'https://image.tmdb.org/t/p/w500/example3.jpg'
  },
  {
    id: 4,
    title: 'Початок',
    description: 'Занурення у світ снів та підсвідомості',
    genre: 'Трилер',
    time: '2025-05-23 20:15',
    poster: 'https://image.tmdb.org/t/p/w500/example4.jpg'
  },
  {
    id: 5,
    title: 'Форрест Ґамп',
    description: 'Життя чоловіка з великим серцем',
    genre: 'Драма',
    time: '2025-05-24 17:00',
    poster: 'https://image.tmdb.org/t/p/w500/example5.jpg'
  },
  {
    id: 6,
    title: 'Матриця',
    description: 'Боротьба проти машин у віртуальному світі',
    genre: 'Фантастика',
    time: '2025-05-25 19:30',
    poster: 'https://image.tmdb.org/t/p/w500/example6.jpg'
  },
  {
    id: 7,
    title: 'Паразити',
    description: 'Історія про нерівність та хитрість',
    genre: 'Трилер',
    time: '2025-05-26 18:00',
    poster: 'https://image.tmdb.org/t/p/w500/example7.jpg'
  },
  {
    id: 8,
    title: 'Клуб бійців',
    description: 'Світ підпільних боїв та ідентичності',
    genre: 'Драма',
    time: '2025-05-27 20:45',
    poster: 'https://image.tmdb.org/t/p/w500/example8.jpg'
  },
  {
    id: 9,
    title: 'Гладіатор',
    description: 'Історія помсти та честі в Римі',
    genre: 'Історичний епос',
    time: '2025-05-28 19:00',
    poster: 'https://image.tmdb.org/t/p/w500/example9.jpg'
  },
  {
    id: 10,
    title: 'Диво-жінка',
    description: 'Амазонка стає героєм у сучасному світі',
    genre: 'Фентезі, Екшн',
    time: '2025-05-29 21:30',
    poster: 'https://image.tmdb.org/t/p/w500/example10.jpg'
  }
];
