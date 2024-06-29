import { Routes } from '@angular/router';
import { NowPlayingPage } from './pages/now-playing/now-playing.page';
import { PopularPage } from './pages/popular/popular.page';
import { TopRatePage } from './pages/top-rate/top-rate.page';
import { UpcomingPage } from './pages/upcoming/upcoming.page';
import { StandardPageLayoutComponent } from './components/standard-page-layout/standard-page-layout.component';
import { MoviePage } from './pages/movie/movie.page';
import { movieResolver } from './pages/movie/services/movie.resolver';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { FavoritePage } from './pages/favorite/favorite.page';
import { WatchlistPage } from './pages/watchlist/watchlist.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'popular',
    pathMatch: 'full'
  },
  {
    path: '',
    component: StandardPageLayoutComponent,
    children: [
      {
        path: 'popular',
        component: PopularPage
      },
      {
        path: 'now-playing',
        component: NowPlayingPage
      },
      {
        path: 'top-rate',
        component: TopRatePage
      },
      {
        path: 'upcoming',
        component: UpcomingPage
      },
      {
        path: 'favorite',
        component: FavoritePage
      },
      {
        path: 'watchlist',
        component: WatchlistPage
      },
      {
        path: 'movie/:id',
        component: MoviePage,
        resolve: {
          data: movieResolver
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundPage
  }
];
