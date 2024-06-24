import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';

@Component({
  standalone: true,
  selector: 'amov-standard-page-layout',
  template: `
    <div class="wrapper">
      <amov-left-sidebar></amov-left-sidebar>
      <main class="main-view">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [``],
  imports: [RouterOutlet, LeftSidebarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardPageLayoutComponent {}
