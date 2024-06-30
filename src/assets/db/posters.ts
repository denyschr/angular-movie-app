import { Poster } from '../../app/models/poster.model';

export const POSTERS: Poster[] = [
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
    rating: 8.0
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
    rating: 6.5
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
    rating: 8.1
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
    rating: 8.7
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
    rating: 6.9
  },
  {
    id: 6,
    adult: false,
    image: '/adipurush.png',
    title: 'Adipurush',
    description:
      "A prince's quest to rescue his wife from a demon king leads him on an epic journey through ancient India, uncovering powerful secrets along the way.",
    genres: ['action', 'drama', 'mythology'],
    popularity: 2000,
    director: 'Om Raut',
    duration: 179,
    release_year: 2023,
    language: 'Hindi',
    rating: 7.5
  },
  {
    id: 7,
    adult: false,
    image: '/pushpa.png',
    title: 'Pushpa',
    description:
      "A smuggler's rise to power in the dense forests of South India is marked by fierce battles, betrayals, and a relentless pursuit of control over the red sandalwood trade.",
    genres: ['action', 'drama', 'thriller'],
    popularity: 1800,
    director: 'Sukumar',
    duration: 179,
    release_year: 2021,
    language: 'Telugu',
    rating: 8.0
  },
  {
    id: 8,
    adult: false,
    image: '/kantara.png',
    title: 'Kantara',
    description:
      "A village's deep-rooted traditions and a fierce conflict with the government unravel secrets that challenge the community's way of life and bring hidden truths to light.",
    genres: ['drama', 'thriller'],
    popularity: 1600,
    director: 'Rishab Shetty',
    duration: 148,
    release_year: 2022,
    language: 'Kannada',
    rating: 8.3
  },
  {
    id: 9,
    adult: true,
    image: '/money-heist.png',
    title: 'Money Heist',
    description:
      "A criminal mastermind's meticulous plan to print billions of euros in the Royal Mint of Spain unravels as he faces unforeseen challenges and a relentless law enforcement pursuit.",
    genres: ['action', 'crime', 'drama', 'thriller'],
    popularity: 3000,
    director: 'Álex Pina',
    duration: 70,
    release_year: 2017,
    language: 'Spanish',
    rating: 8.2
  }
];

export const POPULAR_POSTERS: Poster[] = [
  {
    id: 6,
    adult: false,
    image: '/adipurush.png',
    title: 'Adipurush',
    description:
      "A prince's quest to rescue his wife from a demon king leads him on an epic journey through ancient India, uncovering powerful secrets along the way.",
    genres: ['action', 'drama', 'mythology'],
    popularity: 2000,
    director: 'Om Raut',
    duration: 179,
    release_year: 2023,
    language: 'Hindi',
    rating: 7.5
  },
  {
    id: 7,
    adult: false,
    image: '/pushpa.png',
    title: 'Pushpa',
    description:
      "A smuggler's rise to power in the dense forests of South India is marked by fierce battles, betrayals, and a relentless pursuit of control over the red sandalwood trade.",
    genres: ['action', 'drama', 'thriller'],
    popularity: 1800,
    director: 'Sukumar',
    duration: 179,
    release_year: 2021,
    language: 'Telugu',
    rating: 8.0
  },
  {
    id: 8,
    adult: false,
    image: '/kantara.png',
    title: 'Kantara',
    description:
      "A village's deep-rooted traditions and a fierce conflict with the government unravel secrets that challenge the community's way of life and bring hidden truths to light.",
    genres: ['drama', 'thriller'],
    popularity: 1600,
    director: 'Rishab Shetty',
    duration: 148,
    release_year: 2022,
    language: 'Kannada',
    rating: 8.3
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
    rating: 6.9
  }
];

export const NOW_PLAYING_POSTERS: Poster[] = [
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
    rating: 6.5
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
    rating: 8.7
  },
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
    rating: 8.0
  }
];

export const TOP_RATED_POSTERS = [
  {
    id: 9,
    adult: true,
    image: '/money-heist.png',
    title: 'Money Heist',
    description:
      "A criminal mastermind's meticulous plan to print billions of euros in the Royal Mint of Spain unravels as he faces unforeseen challenges and a relentless law enforcement pursuit.",
    genres: ['action', 'crime', 'drama', 'thriller'],
    popularity: 3000,
    director: 'Álex Pina',
    duration: 70,
    release_year: 2017,
    language: 'Spanish',
    rating: 8.2
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
    rating: 8.1
  },
  {
    id: 8,
    adult: false,
    image: '/kantara.png',
    title: 'Kantara',
    description:
      "A village's deep-rooted traditions and a fierce conflict with the government unravel secrets that challenge the community's way of life and bring hidden truths to light.",
    genres: ['drama', 'thriller'],
    popularity: 1600,
    director: 'Rishab Shetty',
    duration: 148,
    release_year: 2022,
    language: 'Kannada',
    rating: 8.3
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
    rating: 8.7
  }
];

export const UPCOMING_POSTERS = [
  {
    id: 6,
    adult: false,
    image: '/adipurush.png',
    title: 'Adipurush',
    description:
      "A prince's quest to rescue his wife from a demon king leads him on an epic journey through ancient India, uncovering powerful secrets along the way.",
    genres: ['action', 'drama', 'mythology'],
    popularity: 2000,
    director: 'Om Raut',
    duration: 179,
    release_year: 2023,
    language: 'Hindi',
    rating: 7.5
  },
  {
    id: 7,
    adult: false,
    image: '/pushpa.png',
    title: 'Pushpa',
    description:
      "A smuggler's rise to power in the dense forests of South India is marked by fierce battles, betrayals, and a relentless pursuit of control over the red sandalwood trade.",
    genres: ['action', 'drama', 'thriller'],
    popularity: 1800,
    director: 'Sukumar',
    duration: 179,
    release_year: 2021,
    language: 'Telugu',
    rating: 8.0
  },
  {
    id: 8,
    adult: false,
    image: '/kantara.png',
    title: 'Kantara',
    description:
      "A village's deep-rooted traditions and a fierce conflict with the government unravel secrets that challenge the community's way of life and bring hidden truths to light.",
    genres: ['drama', 'thriller'],
    popularity: 1600,
    director: 'Rishab Shetty',
    duration: 148,
    release_year: 2022,
    language: 'Kannada',
    rating: 7.4
  }
];
