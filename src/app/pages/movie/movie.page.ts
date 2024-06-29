import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Poster } from '../../models/poster.model';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../shared/pipes/duration/duration.pipe';

@Component({
  standalone: true,
  selector: 'amov-movie',
  templateUrl: './movie.page.html',
  styleUrl: './movie.page.scss',
  imports: [CommonModule, DurationPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePage {
  public readonly poster$: Observable<Poster> = this._route.data.pipe(
    map(paramMap => paramMap['data'])
  );

  constructor(private _route: ActivatedRoute) {}
}
