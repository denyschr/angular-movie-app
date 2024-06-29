import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrl: './now-playing.page.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlayingPage {}
