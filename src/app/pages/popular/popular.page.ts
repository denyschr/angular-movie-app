import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';
import { posters } from '../../../assets/posters';
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
  public readonly posters = posters;
  public readonly watchList: Poster[] = [];
  public readonly favoriteList: Poster[] = [];

  public addToWatchList(id: number): void {
    const poster = this.posters.find(poster => poster.id === id);
    if (poster && this.watchList.indexOf(poster) === -1) {
      this.watchList.push(poster);
    }
  }

  public addToFavoriteList(id: number): void {
    const poster = this.posters.find(poster => poster.id === id);
    if (poster && this.favoriteList.indexOf(poster) === -1) {
      this.favoriteList.push(poster);
    }
  }
}
