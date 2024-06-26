import { Poster } from '../app/models/poster.model';

export const posters: Poster[] = [
  {
    id: 1,
    adult: false,
    image: '/blade-runner-2049.png',
    title: 'Blade Runner 2049',
    description:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    genres: ['science fiction', 'drama', 'action', 'thriller'],
    popularity: 150,
    director: 'Denis Villeneuve',
    duration: 163,
    release_year: 2017,
    language: 'English',
    rating: 8.0,
  },
  {
    id: 2,
    adult: false,
    image: '/the-gray-man.png',
    title: 'The Gray Man',
    description:
      "When the CIA's most skilled operative accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head.",
    genres: ['action', 'spy', 'drama', 'thriller', 'adventure'],
    popularity: 283,
    director: 'Anthony Russo, Joe Russo',
    duration: 122,
    release_year: 2022,
    language: 'English',
    rating: 6.5,
  },
  {
    id: 3,
    adult: false,
    image: '/lucifer.png',
    title: 'Lucifer',
    description:
      'The devil, Lucifer Morningstar, abandons Hell to run a nightclub in Los Angeles and becomes a consultant to the LAPD.',
    genres: ['action', 'fantasy', 'mystery', 'crime', 'comedy'],
    popularity: 165,
    director: 'Prithviraj Sukumaran',
    duration: 42,
    release_year: 2016,
    language: 'English',
    rating: 8.1,
  },
  {
    id: 4,
    adult: false,
    image: '/stranger-things-3.png',
    title: 'Stranger Things 3',
    description:
      'In the summer of 1985 in Hawkins, the opening of the Starcourt Mall has become the focal point of the town, driving other stores out of business.',
    genres: ['horror', 'drama', 'teen', 'romance', 'adventure'],
    popularity: 150,
    director: 'The Duffer Brothers',
    duration: 50,
    release_year: 2019,
    language: 'English',
    rating: 8.7,
  },
  {
    id: 5,
    adult: false,
    image: '/hightown.png',
    title: 'Hightown',
    description:
      "Set in the world of beautiful but bleak Cape Cod, one woman's journey to sobriety is overshadowed by a murder investigation dragging her into its fold.",
    genres: ['drama', 'mystery', 'thriller', 'crime', 'detective fiction'],
    popularity: 1497,
    director: 'Rebecca Perry Cutter',
    duration: 55,
    release_year: 2020,
    language: 'English',
    rating: 6.9,
  },
];
