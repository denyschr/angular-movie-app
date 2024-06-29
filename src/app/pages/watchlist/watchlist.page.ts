import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrl: './watchlist.page.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage {}
