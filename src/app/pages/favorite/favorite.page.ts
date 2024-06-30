import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';
import { Poster } from '../../models/poster.model';

@Component({
  standalone: true,
  selector: 'amov-favorite',
  templateUrl: './favorite.page.html',
  styleUrl: './favorite.page.scss',
  imports: [PosterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritePage {
  public readonly movies = this._movieService.getFavoriteList();

  constructor(private _movieService: MovieService) {}

  public toggleWatchList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleWatchList(isInList, movie);
  }

  public toggleFavoriteList(isInList: boolean, movie: Poster): void {
    this._movieService.toggleFavoriteList(isInList, movie);
  }
}
