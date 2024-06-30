import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Poster } from '../../models/poster.model';
import { ButtonModule } from 'primeng/button';
import { DurationPipe } from '../../shared/pipes/duration/duration.pipe';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  standalone: true,
  selector: 'amov-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrl: './poster-card.component.scss',
  imports: [RouterLink, ButtonModule, DurationPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterCardComponent implements OnInit {
  @Input() poster!: Poster;
  @Input() isWatchListButton = true;
  @Input() isFavoriteListButton = true;
  @Output() toggleWatchList = new EventEmitter<boolean>();
  @Output() toggleFavoriteList = new EventEmitter<boolean>();
  public isInWatchList = false;
  public isInFavoriteList = false;

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this.isInWatchList = this._movieService.isInWatchList(this.poster.id);
    this.isInFavoriteList = this._movieService.isInFavoriteList(this.poster.id);
  }

  onToggleWatchList(): void {
    this.isInWatchList = !this.isInWatchList;
    this.toggleWatchList.emit(this.isInWatchList);
  }

  onToggleFavoriteList(): void {
    this.isInFavoriteList = !this.isInFavoriteList;
    this.toggleFavoriteList.emit(this.isInFavoriteList);
  }
}
