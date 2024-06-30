import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';
import { Poster } from '../../models/poster.model';

@Component({
  standalone: true,
  selector: 'amov-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrl: './watchlist.page.scss',
  imports: [PosterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage {
  public readonly movies = this._movieService.getWatchList();

  constructor(private _movieService: MovieService) {}

  public toggleWatchList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleWatchList(isInList, movie);
  }

  public toggleFavoriteList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleFavoriteList(isInList, movie);
  }
}
