import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Poster } from '../../models/poster.model';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';

@Component({
  standalone: true,
  selector: 'amov-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrl: './upcoming.page.scss',
  imports: [PosterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingPage {
  public readonly movies = this._movieService.getUpcomingMovies();

  constructor(private _movieService: MovieService) {}

  public toggleWatchList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleWatchList(isInList, movie);
  }

  public toggleFavoriteList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleFavoriteList(isInList, movie);
  }
}
