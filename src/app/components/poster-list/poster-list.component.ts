import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { posters } from '../../../assets/posters';
import { Poster } from '../../models/poster.model';
import { PosterCardComponent } from '../poster-card/poster-card.component';

@Component({
  selector: 'app-poster-list',
  standalone: true,
  imports: [CommonModule, PosterCardComponent],
  templateUrl: './poster-list.component.html',
  styleUrl: './poster-list.component.scss',
})
export class PosterListComponent {
  public readonly posters = posters;
  public watchList: Poster[] = [];
  public favoriteList: Poster[] = [];

  public addToWatchList(id: number): void {
    const poster = this.posters.find((poster) => poster.id === id);
    if (poster && this.watchList.indexOf(poster) === -1) {
      this.watchList.push(poster);
    }
  }

  public addToFavoriteList(id: number): void {
    const poster = this.posters.find((poster) => poster.id === id);
    if (poster && this.favoriteList.indexOf(poster) === -1) {
      this.favoriteList.push(poster);
    }
  }
}
