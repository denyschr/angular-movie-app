import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Poster } from '../../../../models/poster.model';
import { ActivatedRoute } from '@angular/router';
import { PosterCardComponent } from '../../../../components/poster-card/poster-card.component';

@Component({
  standalone: true,
  selector: 'amov-watchlist',
  template: `
    @if (watchList.length) {
      <section class="pt-2 pb-4">
        <h2 class="mb-3 text-2xl">Your watchlist</h2>
        <div class="common-grid">
          @for (poster of watchList; track poster.id) {
            <amov-poster-card [poster]="poster"></amov-poster-card>
          }
        </div>
      </section>
    }
  `,
  styles: [``],
  imports: [PosterCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistComponent implements OnInit {
  public watchList: Poster[] = [];
  #route = inject(ActivatedRoute);

  ngOnInit(): void {
    const param = this.#route.snapshot.queryParamMap.get('q');
    if (param) {
      this.watchList = JSON.parse(param);
    }
  }
}
