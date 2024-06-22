import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Poster } from '../../models/poster.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { MinutesToHoursPipe } from '../../shared/pipes/minutes-to-hours/minutes-to-hours.pipe';

@Component({
  standalone: true,
  selector: 'app-poster-card',
  template: `
    <p-card styleClass="poster">
      <ng-template pTemplate="header">
        <a href="#" class="poster__img">
          <img [src]="'/assets/images' + poster.image" [alt]="poster.title" />
        </a>
      </ng-template>
      <div class="poster__interactive-area flex-col-start">
        <div class="poster__title-area">
          <a href="#" class="poster__title truncate text-title-small">
            {{ poster.title }}
          </a>
          <div class="poster__info-meta truncate-double text-body-marginal-bold">
            <time [attr.datetime]="poster.release_year">{{ poster.release_year }}, </time>
            <span class="poster__director">Directed by {{ poster.director }}</span>
          </div>
          <span class="poster__duration text-body-small">{{
            poster.duration | minutesToHours
          }}</span>
        </div>
        <div class="poster__rating">
          <p-rating [cancel]="false" />
        </div>
        <div class="poster__genres flex-row-center text-body-small-bold">
          @for (genre of poster.genres; track poster.id) {
            <span class="poster__genre text-body-small-bold">#{{ genre | lowercase }}</span>
          }
        </div>
        <p class="poster__description truncate-triple text-body-small">
          {{ poster.description }}
        </p>
        <div class="poster__actions flex-row-center">
          <p-button
            styleClass="poster-action"
            icon="pi pi-bookmark"
            (click)="addToWatchList.emit(poster.id)" />
          <p-button
            styleClass="poster-action"
            icon="pi pi-heart"
            (click)="addToFavoriteList.emit(poster.id)" />
        </div>
      </div>
    </p-card>
  `,
  styles: [``],
  imports: [CommonModule, CardModule, ButtonModule, RatingModule, MinutesToHoursPipe]
})
export class PosterCardComponent {
  @Input() poster!: Poster;
  @Output() addToWatchList = new EventEmitter<number>();
  @Output() addToFavoriteList = new EventEmitter<number>();
}
