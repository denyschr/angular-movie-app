import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poster } from '../../../../models/poster.model';
import { PosterCardComponent } from '../../../../components/poster-card/poster-card.component';

@Component({
  standalone: true,
  selector: 'amov-favorite',
  template: `
    @if (favoriteList.length) {
      <section class="pt-2 pb-4">
        <h2 class="mb-3 text-2xl">Your favorite movies</h2>
        <div class="common-grid">
          @for (poster of favoriteList; track poster.id) {
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
export class FavoriteComponent implements OnInit {
  public favoriteList: Poster[] = [];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    const param = this._route.snapshot.queryParamMap.get('q');
    if (param) {
      this.favoriteList = JSON.parse(param);
    }
  }
}
