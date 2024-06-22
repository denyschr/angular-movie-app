import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Poster } from '../../models/poster.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { MinutesToHoursPipe } from '../../shared/pipes/minutes-to-hours/minutes-to-hours.pipe';

@Component({
  selector: 'app-poster-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RatingModule, MinutesToHoursPipe],
  templateUrl: './poster-card.component.html',
  styleUrl: './poster-card.component.scss'
})
export class PosterCardComponent {
  @Input() poster!: Poster;
  @Output() addToWatchList = new EventEmitter<number>();
  @Output() addToFavoriteList = new EventEmitter<number>();
}
