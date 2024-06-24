import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'amov-left-sidebar',
  template: `
    <nav class="left-sidebar h-full p-2" aria-label="Main navigation">
      <ul class="flex flex-column gap-2 text-base">
        <li>
          <a [routerLink]="['/popular']" class="w-full p-button text-left">Popular</a>
        </li>
        <li>
          <a [routerLink]="['/now-playing']" class="w-full p-button text-left">Now Playing</a>
        </li>
        <li>
          <a [routerLink]="['/top-rate']" class="w-full p-button text-left">Top Rate</a>
        </li>
        <li>
          <a [routerLink]="['/upcoming']" class="w-full p-button text-left">Upcoming</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      :host {
        grid-area: left-sidebar;
      }
      .left-sidebar {
        width: var(--left-sidebar-width);
      }
    `
  ],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftSidebarComponent {}
