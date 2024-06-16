import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosterListComponent } from './components/poster-list/poster-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-movie-app';
}
