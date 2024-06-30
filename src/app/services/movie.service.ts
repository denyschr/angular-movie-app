import { Injectable } from '@angular/core';
import {
  NOW_PLAYING_POSTERS,
  POPULAR_POSTERS,
  POSTERS,
  TOP_RATED_POSTERS,
  UPCOMING_POSTERS
} from '../../assets/db/posters';
import { Poster } from '../models/poster.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly _movies = POSTERS;
  private readonly _popularMovies = POPULAR_POSTERS;
  private readonly _nowPlayingMovies = NOW_PLAYING_POSTERS;
  private readonly _topRateMovies = TOP_RATED_POSTERS;
  private readonly _upcomingMovies = UPCOMING_POSTERS;
  private readonly _watchList: Poster[] = [];
  private readonly _favoriteList: Poster[] = [];

  public getPopularMovies(): Poster[] {
    return this._popularMovies;
  }

  public getNowPlayingMovies(): Poster[] {
    return this._nowPlayingMovies;
  }

  public getTopRatedMovies(): Poster[] {
    return this._topRateMovies;
  }

  public getUpcomingMovies(): Poster[] {
    return this._upcomingMovies;
  }

  public getMovie(id: number): Poster | undefined {
    return this._movies.find(movie => movie.id === id);
  }

  public getWatchList(): Poster[] {
    return this._watchList;
  }

  public getFavoriteList(): Poster[] {
    return this._favoriteList;
  }

  public toggleWatchList(isInList: boolean, poster: Poster): void {
    const index = this._watchList.indexOf(poster);
    if (isInList) {
      this._watchList.push(poster);
    } else {
      this._watchList.splice(index, 1);
    }
  }

  public toggleFavoriteList(isInList: boolean, poster: Poster): void {
    const index = this._favoriteList.indexOf(poster);
    if (isInList) {
      this._favoriteList.push(poster);
    } else {
      this._favoriteList.splice(index, 1);
    }
  }

  public isInWatchList(id: number): boolean {
    return this._watchList.some(poster => poster.id === id);
  }

  public isInFavoriteList(id: number): boolean {
    return this._favoriteList.some(poster => poster.id === id);
  }
}
