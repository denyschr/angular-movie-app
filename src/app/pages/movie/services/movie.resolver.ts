import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { Poster } from '../../../models/poster.model';
import { MovieService } from '../../../services/movie.service';

export const movieResolver: ResolveFn<Poster> = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const movieService = inject(MovieService);
  const movieId = Number(route.paramMap.get('id'));
  const poster = movieService.getMovie(movieId);
  if (!poster) {
    router.navigate(['**']);
    return EMPTY;
  }
  return of(poster);
};
