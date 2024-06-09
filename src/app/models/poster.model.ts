export interface Poster {
  id: number;
  adult: boolean;
  image: string;
  title: string;
  description: string;
  genres: string[];
  popularity: number;
  director: string;
  duration: number;
  release_year: number;
  language: string;
  rating: number;
}
