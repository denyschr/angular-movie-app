import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';
import { Poster } from '../../models/poster.model';

@Component({
  standalone: true,
  selector: 'amov-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrl: './now-playing.page.scss',
  imports: [PosterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlayingPage {
  public readonly movies = this._movieService.getNowPlayingMovies();

  constructor(private _movieService: MovieService) {}

  public toggleWatchList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleWatchList(isInList, movie);
  }

  public toggleFavoriteList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleFavoriteList(isInList, movie);
  }
}
