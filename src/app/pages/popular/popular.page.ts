import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';
import { MovieService } from '../../services/movie.service';
import { Poster } from '../../models/poster.model';

@Component({
  standalone: true,
  selector: 'amov-popular',
  templateUrl: './popular.page.html',
  styleUrl: './popular.page.scss',
  imports: [RouterOutlet, PosterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularPage {
  public readonly movies = this._movieService.getPopularMovies();

  constructor(private _movieService: MovieService) {}

  public toggleWatchList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleWatchList(isInList, movie);
  }

  public toggleFavoriteList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleFavoriteList(isInList, movie);
  }
}
