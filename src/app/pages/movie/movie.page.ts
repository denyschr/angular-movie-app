import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Poster } from '../../models/poster.model';
import { CommonModule } from '@angular/common';
import { MinutesToHoursPipe } from '../../shared/pipes/minutes-to-hours/minutes-to-hours.pipe';

@Component({
  standalone: true,
  selector: 'amov-movie',
  template: `
    @if (poster$ | async; as poster) {
      <div class="content-spacing">
        <section class="pt-2 pb-4">
          <div class="flex align-items-start column-gap-4">
            <div class="flex-shrink-0 border-round-md overflow-hidden">
              <img
                class="w-full h-full"
                [src]="'assets/images' + poster.image"
                [alt]="poster.title" />
            </div>
            <div class="flex flex-column row-gap-2">
              <h1 class="truncate text-2xl text-600">
                {{ poster.title }}
              </h1>
              <span class="text-500">
                {{ poster.duration | minutesToHours }}
              </span>
              <div class="flex align-items-center column-gap-3">
                <div class="flex align-items-center column-gap-2">
                  <i class="pi pi-star-fill text-orange-500"></i>
                  <span class="text-400">{{ poster.rating }}/10</span>
                </div>
                <span class="truncate text-500">{{ poster.director }}</span>
              </div>
              <div>
                <h2 class="mb-2 text-lg text-600">Overview</h2>
                <p class="text-500 font-medium font-italic line-height-3">
                  {{ poster.description }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    }
  `,
  styles: [],
  imports: [CommonModule, MinutesToHoursPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePage {
  public readonly poster$: Observable<Poster> = this._route.data.pipe(
    map(paramMap => paramMap['data'])
  );

  constructor(private _route: ActivatedRoute) {}
}
