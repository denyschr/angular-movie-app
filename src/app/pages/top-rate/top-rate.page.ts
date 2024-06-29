import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-top-rate',
  templateUrl: './top-rate.page.html',
  styleUrl: './top-rate.page.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatePage {}
