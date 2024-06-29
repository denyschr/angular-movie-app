import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'amov-favorite',
  templateUrl: './favorite.page.html',
  styleUrl: './favorite.page.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritePage {}
