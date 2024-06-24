import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-now-playing',
  template: `<p>now-playing works!</p>`,
  styles: [``],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlayingPage {}
