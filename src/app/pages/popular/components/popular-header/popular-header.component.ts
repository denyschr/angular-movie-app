import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Poster } from '../../../../models/poster.model';

@Component({
  standalone: true,
  selector: 'amov-popular-header',
  template: `
    <header class="header">
      <div class="content-spacing flex align-items-center">
        <nav>
          <ul class="flex gap-2">
            <li>
              <button class="p-button" (click)="navigateToWatchlist()">Watchlist</button>
            </li>
            <li>
              <button class="p-button" (click)="navigateToFavorite()">Favorite</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [
    `
      .content-spacing {
        min-height: var(--header-height);
      }
    `
  ],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularHeaderComponent {
  @Input() watchList: Poster[] = [];
  @Input() favoriteList: Poster[] = [];
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  public navigateToWatchlist() {
    const param = JSON.stringify(this.watchList);
    this.#router.navigate(['watchlist'], {
      relativeTo: this.#route,
      queryParams: { q: param },
      replaceUrl: true
    });
  }

  public navigateToFavorite() {
    const param = JSON.stringify(this.favoriteList);
    this.#router.navigate(['favorite'], {
      relativeTo: this.#route,
      queryParams: { q: param },
      replaceUrl: true
    });
  }
}
