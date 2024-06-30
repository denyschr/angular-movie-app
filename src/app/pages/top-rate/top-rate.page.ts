import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';
import { Poster } from '../../models/poster.model';
import { MovieService } from '../../services/movie.service';

@Component({
  standalone: true,
  selector: 'amov-top-rate',
  templateUrl: './top-rate.page.html',
  styleUrl: './top-rate.page.scss',
  imports: [PosterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatePage {
  public readonly movies = this._movieService.getTopRatedMovies();

  constructor(private _movieService: MovieService) {}

  public toggleWatchList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleWatchList(isInList, movie);
  }

  public toggleFavoriteList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleFavoriteList(isInList, movie);
  }
}
