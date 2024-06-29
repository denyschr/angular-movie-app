import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrl: './upcoming.page.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingPage {}
