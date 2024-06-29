import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Poster } from '../../models/poster.model';
import { ButtonModule } from 'primeng/button';
import { DurationPipe } from '../../shared/pipes/duration/duration.pipe';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'amov-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrl: './poster-card.component.scss',
  imports: [RouterLink, ButtonModule, DurationPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterCardComponent {
  @Input() poster!: Poster;
  @Output() addToWatchList = new EventEmitter<number>();
  @Output() addToFavoriteList = new EventEmitter<number>();
}
