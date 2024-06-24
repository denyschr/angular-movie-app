import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'amov-not-found',
  template: `
    <div class="flex flex-column align-items-center row-gap-2">
      <h1>Page not available</h1>
      <a [routerLink]="['']" class="p-button">Home</a>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-directive: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    `
  ],
  imports: [RouterLink, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPage {}
