import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PopularHeaderComponent } from './components/popular-header/popular-header.component';
import { RouterOutlet } from '@angular/router';
import { PosterCardComponent } from '../../components/poster-card/poster-card.component';
import { posters } from '../../../assets/posters';
import { Poster } from '../../models/poster.model';

@Component({
  standalone: true,
  selector: 'amov-popular',
  template: `
    <amov-popular-header
      [watchList]="watchList"
      [favoriteList]="favoriteList"></amov-popular-header>
    <div class="content-spacing">
      @if (posters.length) {
        <section class="pt-2 pb-4">
          <h2 class="mb-3 text-2xl">Popular movies</h2>
          <div class="common-grid">
            @for (poster of posters; track poster) {
              <amov-poster-card
                [poster]="poster"
                (addToWatchList)="addToWatchList($event)"
                (addToFavoriteList)="addToFavoriteList($event)">
              </amov-poster-card>
            }
          </div>
        </section>
      }
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``],
  imports: [RouterOutlet, PopularHeaderComponent, PosterCardComponent],
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
