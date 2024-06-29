import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'amov-not-found',
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.scss',
  imports: [RouterLink, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPage {}
