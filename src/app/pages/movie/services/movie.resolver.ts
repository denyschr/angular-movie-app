import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { posters } from '../../../../assets/posters';
import { inject } from '@angular/core';
import { EMPTY, of } from 'rxjs';

export const movieResolver = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const movieId = Number(route.paramMap.get('id'));
  const poster = posters.find(poster => poster.id === movieId);
  if (!poster) {
    router.navigate(['**']);
    return EMPTY;
  }
  return of(poster);
};
