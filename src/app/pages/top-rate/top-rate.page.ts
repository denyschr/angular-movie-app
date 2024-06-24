import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-top-rate',
  template: `<p>top-rate works!</p>`,
  styles: [``],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatePage {}
