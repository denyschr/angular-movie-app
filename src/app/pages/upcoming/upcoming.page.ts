import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-upcoming',
  template: `<p>upcoming works!</p>`,
  styles: [``],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingPage {}
