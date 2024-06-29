import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'amov-root',
  template: `<router-outlet></router-outlet>`,
  styles: [``],
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'angular-movie-app';
}
