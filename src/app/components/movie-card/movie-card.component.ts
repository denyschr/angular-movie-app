import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Poster } from '../../models/poster.model';
import { MinutesToHoursPipe } from '../../shared/pipes/minutes-to-hours/minutes-to-hours.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, MinutesToHoursPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() poster!: Poster;
  @Output() addToWatchList = new EventEmitter<number>();
  @Output() addToFavoritesList = new EventEmitter<number>();
}
