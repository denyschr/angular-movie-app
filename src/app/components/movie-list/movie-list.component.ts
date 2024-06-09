import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { posters } from '../../../assets/posters';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  public readonly posters = posters;
  public watchList: string[] = [];
  public favoritesList: string[] = [];

  public addToWatchList(id: number): void {
    const poster = this.posters.find((poster) => poster.id === id);
    if (poster) {
      this.watchList.push(poster.title);
    }
  }

  public addToFavoritesList(id: number): void {
    const poster = this.posters.find((poster) => poster.id === id);
    if (poster) {
      this.favoritesList.push(poster.title);
    }
  }
}
