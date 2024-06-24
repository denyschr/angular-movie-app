import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Poster } from '../../models/poster.model';
import { ButtonModule } from 'primeng/button';
import { MinutesToHoursPipe } from '../../shared/pipes/minutes-to-hours/minutes-to-hours.pipe';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'amov-poster-card',
  template: `
    <article class="poster relative">
      <div class="poster__img border-round-top-md overflow-hidden">
        <img class="w-full h-full" [src]="'assets/images' + poster.image" [alt]="poster.title" />
      </div>
      <div
        class="flex flex-column align-items-start row-gap-3 py-4 px-3 border-round-bottom-md bg-white shadow-2">
        <a
          [routerLink]="['/movie', poster.id]"
          class="poster__title truncate text-xl text-600 font-medium transition-linear transition-duration-200 hover:text-900"
          >{{ poster.title }}
        </a>
        <span class="relative z-2 text-500">
          {{ poster.duration | minutesToHours }}
        </span>
        <div class="relative z-2 flex align-items-center column-gap-3">
          <div class="flex align-items-center column-gap-2">
            <i class="pi pi-star-fill text-orange-500"></i>
            <span class="text-400">{{ poster.rating }}/10</span>
          </div>
          <span class="truncate text-500">{{ poster.director }}</span>
        </div>
        <p
          class="relative z-2 truncate truncate-triple text-500 font-medium font-italic line-height-3">
          {{ poster.description }}
        </p>
        <div class="relative z-2 flex align-items-center column-gap-2">
          <p-button
            icon="pi pi-bookmark"
            [rounded]="true"
            severity="danger"
            (click)="addToWatchList.emit(poster.id)" />
          <p-button
            icon="pi pi-heart"
            [rounded]="true"
            severity="danger"
            (click)="addToFavoriteList.emit(poster.id)" />
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .poster {
        &__img {
          aspect-ratio: 192 / 232;
        }
        &__title {
          &::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
          }
        }
      }
    `
  ],
  imports: [RouterLink, ButtonModule, MinutesToHoursPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterCardComponent {
  @Input() poster!: Poster;
  @Output() addToWatchList = new EventEmitter<number>();
  @Output() addToFavoriteList = new EventEmitter<number>();
}
